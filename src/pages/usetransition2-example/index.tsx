import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const slides = [
  require('@/assets/transition-1.jpeg'),
  require('@/assets/transition-2.jpeg'),
  require('@/assets/transition-3.jpeg'),
  require('@/assets/transition-4.jpeg'),
];

const useTransition2Example = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((state) => (state + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {transitions((style, i) => (
        <animated.div
          style={{
            ...style,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${slides[i]}`,
          }}
        />
      ))}
    </div>
  );
};

export default useTransition2Example;
