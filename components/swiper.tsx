import React, { useRef, useEffect, ReactNode } from 'react';
import { register } from 'swiper/element/bundle';

register();

interface SwiperJSProps {
  children: ReactNode;
  className?: string;
}

// Extending the JSX IntrinsicElements interface
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'slides-per-view'?: string;
        'space-between'?: string;
        navigation?: string;
        pagination?: string;
      };
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const SwiperJS: React.FC<SwiperJSProps> = ({ children, className }) => {
  const swiperElRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const swiperEl = swiperElRef.current;
    if (swiperEl) {
      // Listen for Swiper events using addEventListener
      const handleSwiperProgress = (e: Event) => {
        const event = e as CustomEvent;
        const [swiper, progress] = event.detail;
        console.log(progress);
      };

      const handleSwiperSlideChange = (e: Event) => {
        console.log('slide changed');
      };

      swiperEl.addEventListener('swiperprogress', handleSwiperProgress);
      swiperEl.addEventListener('swiperslidechange', handleSwiperSlideChange);

      // Cleanup event listeners on unmount
      return () => {
        swiperEl.removeEventListener('swiperprogress', handleSwiperProgress);
        swiperEl.removeEventListener('swiperslidechange', handleSwiperSlideChange);
      };
    }
  }, []);

  return React.createElement(
    'swiper-container',
    {
      ref: swiperElRef,
      class: className,
      'slides-per-view': '1',
      'space-between': '25',
      navigation: 'false',
      pagination: 'true',
    },
    React.Children.map(children, (child) => React.createElement('swiper-slide', {}, child))
  );
};

export default SwiperJS;
