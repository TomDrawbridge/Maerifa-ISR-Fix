import React, { useCallback, useEffect, useRef } from 'react';
import createGlobe, { COBEOptions } from 'cobe';
import { useSpring } from 'react-spring';
import { registerComponent } from '@plasmicapp/react-web/lib/host';

interface GlobeProps {
  className?: string;
  width?: number;
  height?: number;
  devicePixelRatio?: number;
  phi?: number;
  theta?: number;
  dark?: number;
  opacity?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: string; // RGB as a comma-separated string "r,g,b"
  markerColor?: string;
  glowColor?: string;
  markers?: any[]; // Define more specifically based on actual marker requirements
  offset?: [number, number];
  onRender?: (state: any) => void; // Define more specifically if possible
  canvasStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const parseColor = (color: string, defaultColor: [number, number, number]): [number, number, number] => {
  const parts = color.split(',').map(Number);
  if (parts.length === 3) {
    return [parts[0], parts[1], parts[2]];
  }
  return defaultColor;
};

const validateOffset = (offset: any, defaultOffset: [number, number]): [number, number] => {
  if (Array.isArray(offset) && offset.length === 2) {
    return [offset[0], offset[1]];
  }
  return defaultOffset;
};

const Globe: React.FC<GlobeProps> = ({
  className,
  width = 500,
  height = 500,
  devicePixelRatio = 2,
  phi = 0,
  theta = 0,
  dark = 1,
  opacity = 1,
  diffuse = 2,
  mapSamples = 16000,
  mapBrightness = 1,
  baseColor = '1.2,1.7,2.5',
  markerColor = '1.2,1.7,2.5',
  glowColor = '0.2,0.2,0.3',
  markers = [],
  offset = [0, 0],
  onRender,
  canvasStyle,
  containerStyle
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
  const initializeGlobe = () => {
    if (canvasRef.current) {
      console.log('Initializing Globe:', canvasRef.current);
      let phiIncrement = phi;
      const cobeConfig: COBEOptions = {
        devicePixelRatio,
        width: width * 2,
        height: height * 2,
        phi: phiIncrement,
        theta,
        dark,
        opacity,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor: parseColor(baseColor, [1.2, 1.7, 2.5]),
        markerColor: parseColor(markerColor, [1.2, 1.7, 2.5]),
        glowColor: parseColor(glowColor, [0.2, 0.2, 0.3]),
        markers,
        offset: validateOffset(offset, [0, 0]),
        onRender: (state) => {
          if (!pointerInteracting.current && onRender) {
            onRender(state);
          } else {
            if (!pointerInteracting.current) {
              phiIncrement += 0.005;
            }
            state.phi = phiIncrement + r.get();
            state.width = cobeConfig.width;
            state.height = cobeConfig.height;
          }
        },
      };

      const onResize = () => {
        if (canvasRef.current) {
          const currentWidth = canvasRef.current.offsetWidth * 2;
          cobeConfig.width = currentWidth;
          cobeConfig.height = currentWidth;
        }
      };

      window.addEventListener('resize', onResize);
      onResize();

      try {
        const globe = createGlobe(canvasRef.current, cobeConfig);
        setTimeout(() => {
          if (canvasRef.current) {
            canvasRef.current.style.opacity = '1';
          }
        });
        
        return () => {
          globe.destroy();
          window.removeEventListener('resize', onResize);
        };
      } catch (error) {
        console.error('Error during globe initialization:', error);
      }
    } else {
      console.error('canvasRef.current is null during globe initialization');
    }
  };

  setTimeout(() => {
    if (canvasRef.current) {
      requestAnimationFrame(initializeGlobe);
    }
  }, 0);
}, [
  width,
  height,
  devicePixelRatio,
  phi,
  theta,
  dark,
  opacity,
  diffuse,
  mapSamples,
  mapBrightness,
  baseColor,
  markerColor,
  offset,
  glowColor,
  markers,
  onRender,
]);


  return (
    <div
      style={{
        width: '100%',
        maxWidth: width,
        aspectRatio: 1,
        margin: 'auto',
        position: 'relative',
        ...containerStyle,
      }}
      className={className}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 100 });
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 1s ease',
          ...canvasStyle,
        }}
      />
    </div>
  );
};

export default Globe;