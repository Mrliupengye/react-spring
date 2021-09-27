import * as React from 'react';
import { animated, useSpring } from 'react-spring';

const { useRef, useState, useEffect, useMemo } = React;

interface StateExampleProps {}

const defaultProps: StateExampleProps = {};

const StateExample: React.FC<StateExampleProps> = (
  props: React.PropsWithChildren<StateExampleProps> = defaultProps,
) => {
  const {} = props;

  const [clicked, toggleClick] = useState(false);

  const animate_toggle = useSpring({
    color: clicked ? 'red' : 'blue',
  });

  return (
    <div>
      <animated.h1 style={animate_toggle}>
        {clicked ? 'Red text~' : 'Blue text~'}
      </animated.h1>
      <button onClick={() => toggleClick(!clicked)}>click</button>
    </div>
  );
};

export default StateExample;
