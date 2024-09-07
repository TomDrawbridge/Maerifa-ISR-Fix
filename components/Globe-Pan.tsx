import React, { useEffect, useRef } from 'react';
import createGlobe, { COBEOptions } from 'cobe';

interface GlobePanProps {
  currentLocation?: { lat: number, lng: number }[];
  className?: string;
  width?: number;
  height?: number;
  devicePixelRatio?: number;
  dark?: number;
  opacity?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: string; // RGB as a comma-separated string "r,g,b"
  markerColor?: string;
  glowColor?: string;
  markers?: any[]; // Define more specifically based on actual marker requirements
  canvasStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const initialLocation = { lat: 24.4539, lng: 54.3773 }; // Abu Dhabi

const parseColor = (color: string, defaultColor: [number, number, number]): [number, number, number] => {
  const parts = color.split(',').map(Number);
  if (parts.length === 3) {
    return [parts[0], parts[1], parts[2]];
  }
  return defaultColor;
};

const GlobePan: React.FC<GlobePanProps> = ({
  currentLocation,
  className,
  width = 500,
  height = 500,
  devicePixelRatio = 2,
  dark = 1,
  opacity = 1,
  diffuse = 2,
  mapSamples = 16000,
  mapBrightness = 1,
  baseColor = '1.2,1.7,2.5',
  markerColor = '1.2,1.7,2.5',
  glowColor = '0.2,0.2,0.3',
  markers = [
    { location: [24.4539, 54.3773], size: 0.1 },
    { location: [1.3521, 103.8198], size: 0.1 },
    { location: [51.5074, -0.1278], size: 0.1 },
  ],
  canvasStyle,
  containerStyle,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const locationToAngles = (lat: number, long: number) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
  };

  const focusRef = useRef(locationToAngles(initialLocation.lat, initialLocation.lng));

  useEffect(() => {
    if (currentLocation && currentLocation.length > 0) {
      focusRef.current = locationToAngles(currentLocation[0].lat, currentLocation[0].lng);
    }

    let widthValue = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;

    const onResize = () => {
      if (canvasRef.current) {
        widthValue = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (canvasRef.current) {
      const globeConfig: COBEOptions = {
        devicePixelRatio,
        width: widthValue * 2,
        height: widthValue * 2,
        phi: 0,
        theta: 0.3,
        dark,
        opacity,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor: parseColor(baseColor, [1.2, 1.7, 2.5]),
        markerColor: parseColor(markerColor, [1.2, 1.7, 2.5]),
        glowColor: parseColor(glowColor, [0.2, 0.2, 0.3]),
        markers,
        onRender: (state) => {
          state.phi = currentPhi;
          state.theta = currentTheta;
          const [focusPhi, focusTheta] = focusRef.current;
          const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
          const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;
          // Control the speed
          if (distPositive < distNegative) {
            currentPhi += distPositive * 0.08;
          } else {
            currentPhi -= distNegative * 0.08;
          }
          currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
          state.width = widthValue * 2;
          state.height = widthValue * 2;
        },
      };

      const globe = createGlobe(canvasRef.current, globeConfig);

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = '1';
        }
      });

      return () => {
        globe.destroy();
        window.removeEventListener('resize', onResize);
      };
    }
  }, [currentLocation]);

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
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 1s ease',
          ...canvasStyle,
        }}
      />
    </div>
  );
};

export default GlobePan;
