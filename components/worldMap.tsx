import React, { useEffect, useRef, useState } from 'react';
import DottedMap from 'dotted-map/without-countries';
import MyMapString from '../src/myMap';

interface WorldMapProps {
  className?: string;
}

interface Pin {
  lat: number;
  lng: number;
  destination: string;
}

const WorldMap: React.FC<WorldMapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('https://content.maerifasolutions.com/items/continents?fields=continent,address.address_id.mapbox');
        const data = await response.json();
        const newPins: Pin[] = [];

        data.data.forEach((continent: any) => {
          if (continent.address && Array.isArray(continent.address)) {
            continent.address.forEach((address: any) => {
              if (address.address_id && 
                  address.address_id.mapbox && 
                  Array.isArray(address.address_id.mapbox.coordinates) &&
                  address.address_id.mapbox.coordinates.length === 2) {
                newPins.push({
                  lat: address.address_id.mapbox.coordinates[1],
                  lng: address.address_id.mapbox.coordinates[0],
                  destination: continent.continent
                });
              }
            });
          }
        });

        setPins(newPins);
      } catch (error) {
        console.error('Error fetching locations:', error);
        setPins([]);
      }
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    
    const map = new DottedMap({ map: JSON.parse(MyMapString) });
    
    if (pins.length > 0) {
      pins.forEach((pin) => {
        map.addPin({
          lat: pin.lat,
          lng: pin.lng,
          svgOptions: { color: '#fffcf2', radius: 1.05 },
        });
      });
    }

    const svgMap = map.getSVG({
      radius: 0.15,
      color: '#9BDBFF',
      shape: 'hexagon',
      backgroundColor: '#00000000',
    });

    mapRef.current.innerHTML = svgMap;
    const svg = mapRef.current.querySelector('svg');
    if (!svg) return;
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');


    if (pins.length > 0) {
      const polylines = svg.querySelectorAll('polyline[fill="#fffcf2"]');
      polylines.forEach((polyline, index) => {
        if (index < pins.length) {
          const link = document.createElementNS('http://www.w3.org/2000/svg', 'a');
          link.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${pins[index].destination}`);
          polyline.parentNode!.insertBefore(link, polyline);
          link.appendChild(polyline);
          
          const points = polyline.getAttribute('points')!.split(' ').map(p => p.split(',').map(Number));
          const sumX = points.reduce((sum, point) => sum + point[0], 0);
          const sumY = points.reduce((sum, point) => sum + point[1], 0);
          const centerX = sumX / points.length;
          const centerY = sumY / points.length;
          
          (polyline as SVGElement).style.transformOrigin = `${centerX}px ${centerY}px`;
          (polyline as SVGElement).style.transition = 'transform 0.2s';
          
(polyline as SVGElement).style.transform = 'rotate(30deg)';
          link.addEventListener('mouseenter', () => {
            (polyline as SVGElement).style.transform = 'rotate(90deg) scale(1.5)';
          });
          link.addEventListener('mouseleave', () => {
            (polyline as SVGElement).style.transform = 'rotate(30deg) scale(1)';
          });
          
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = pins[index].destination;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      });
    }
  }, [pins]);

  return (
    <div 
      ref={mapRef}
      className={className} 
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
    />
  );
};

export default WorldMap;