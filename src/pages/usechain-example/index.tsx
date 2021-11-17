import {
  animated,
  useTrail,
  config,
  useSpring,
  useChain,
  useSpringRef,
} from 'react-spring';
import React, { useState } from 'react';

const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];
const Chain = () => {
  const [expanded, setExpanded] = useState(false);

  const springRef = useSpringRef();
  const springConfig = {
    from: { transform: `translateX(80px)` },
    to: { transform: `translateX(0px)` },
    ref: springRef,
    config: config.stiff,
    reverse: expanded,
  };

  const trailRef = useSpringRef();
  const trailConfig = {
    from: { height: '5px' },
    to: { height: '80px' },
    ref: trailRef,
    reverse: !expanded,
  };

  const spring = useSpring(springConfig);
  const trailSprings = useTrail(colors.length, trailConfig);
  useChain(expanded ? [springRef, trailRef] : [trailRef, springRef]);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <animated.div
        style={{
          ...spring,
          height: '400px',
          display: 'inline-flex',
          alignItems: 'flex-end',
          marginBottom: '15px',
        }}
      >
        {trailSprings.map((trailSpring, index) => (
          <animated.div
            key={colors[index]}
            style={{
              ...trailSpring,
              width: '60px',
              marginRight: '10px',
              transformOrigin: 'bottom',
              backgroundColor: colors[index],
            }}
          />
        ))}
      </animated.div>
      <div>
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          切换
        </button>
      </div>
    </div>
  );
};

const useChainExample = () => {
  return <Chain />;
};

export default useChainExample;
