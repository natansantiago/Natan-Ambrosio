
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
  className?: string;
  delayClass?: string;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fade-up', 
  className = '',
  delayClass = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const animationClasses = {
    'fade-up': 'reveal',
    'reveal-left': 'reveal-left',
    'reveal-right': 'reveal-right',
    'reveal-scale': 'reveal-scale'
  };

  return (
    <div 
      ref={ref} 
      className={`${animationClasses[animation]} ${isVisible ? 'active' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
