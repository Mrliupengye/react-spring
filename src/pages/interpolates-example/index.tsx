import * as React from 'react';
import { animated, useSpring } from 'react-spring';

const { useState } = React;

const InterpolatesExample = () => {
  const [clicked, toggleClick] = useState(false);

  const { xy, c } = useSpring({
    from: { xy: [0, 0], c: 'blue' },
    xy: clicked ? [900, 200] : [0, 0],
    c: clicked ? 'red' : 'blue',
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`), // interpolate弃用, to代替
          color: c.to((c) => c),
        }}
      >
        {!clicked ? 'reset' : 'move out'}
      </animated.h1>
      <button onClick={() => toggleClick(!clicked)}>Change</button>
    </div>
  );
};

export default InterpolatesExample;
