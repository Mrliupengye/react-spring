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
  });

  const animate_color = useSpring({
    from: { color: 'yellow' },
    to: { color: 'blue' },
  });

  const animate_multiColor = useSpring({
    from: { opacity: 0, color: 'yellow' },
    to: [
      { opacity: 0.5, color: 'blue' },
      { opacity: 1, color: 'red' },
      { opacity: 0.8, color: 'black' },
      { opacity: 0.5, color: 'green' },
    ],
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
    </div>
  );
};

export default FromToExample;
