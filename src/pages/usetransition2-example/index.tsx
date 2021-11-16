import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const slides = [
  'photo-1544511916-0148ccdeb877',
  'photo-1544572571-ab94fd872ce4',
  'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
  'photo-1540206395-68808572332f',
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
            backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
          }}
        />
      ))}
    </div>
  );
};

export default useTransition2Example;
