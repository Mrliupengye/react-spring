import * as React from 'react';
import { animated, useSpring } from 'react-spring';

const { useState } = React;

const StateExample = () => {
  const [clicked, handleClick] = useState(false);

  const animate_toggle = useSpring({
    color: clicked ? 'red' : 'blue',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <animated.h1 style={animate_toggle}>
        {clicked ? 'Red text~' : 'Blue text~'}
      </animated.h1>
      <button onClick={() => handleClick(!clicked)}>click</button>
    </div>
  );
};

export default StateExample;
