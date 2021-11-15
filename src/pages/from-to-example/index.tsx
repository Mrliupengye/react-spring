import * as React from 'react';
import { animated, useSpring } from 'react-spring';

const { useRef, useState, useEffect, useMemo } = React;

interface FromToExampleProps {}

const defaultProps: FromToExampleProps = {};

const FromToExample: React.FC<FromToExampleProps> = (
  props: React.PropsWithChildren<FromToExampleProps> = defaultProps,
) => {
  const {} = props;

  const animate_opacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
    onStart: () => {},
    onRest: () => {},
  });

  console.log('animate_opacity: ', animate_opacity);

  const animate_color = useSpring({
    from: { color: 'yellow' },
    to: { color: 'blue' },
  });

  const animate_multiColor = useSpring({
    from: {
      opacity: 0,
      color: 'yellow',
      background: 'rgba(0,0,0,0.5)',
      width: '200px',
    },
    to: [
      { opacity: 0.5, color: 'blue', width: '900px' },
      { opacity: 1, color: 'red', width: '400px' },
      { opacity: 0.8, color: 'black', width: '900px' },
      { opacity: 0.5, color: 'green', width: '800px' },
    ],
  });

  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  return (
    <div>
      <animated.h1 style={animate_opacity}>
        Hello React Spring - Opacity
      </animated.h1>
      <animated.h1 style={animate_color}>
        Hello React Spring - Color
      </animated.h1>
      <animated.h1 style={animate_multiColor}>
        Hello React Spring - multiColor
      </animated.h1>
      <animated.div
        style={{
          width: 80,
          height: 80,
          marginLeft: '100px',
          backgroundColor: '#46e891',
          borderRadius: 16,
          display: 'inline-block',
          ...styles,
        }}
      ></animated.div>
    </div>
  );
};

export default FromToExample;
