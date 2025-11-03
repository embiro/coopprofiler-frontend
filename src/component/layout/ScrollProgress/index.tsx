'use client';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [topPosition, setTopPosition] = useState(73);

  useEffect(() => {
    const calculatePosition = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        setTopPosition(headerHeight);
      }
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);

    return () => window.removeEventListener('resize', calculatePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const totalScrollableDistance = documentHeight - windowHeight;
      const progress = totalScrollableDistance > 0 
        ? (scrollTop / totalScrollableDistance) * 100 
        : 0;
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial value

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed left-0 w-full h-1 z-10 bg-transparent" 
      style={{ top: `${topPosition}px` }}
    >
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

