import { animated, useSprings, config } from 'react-spring';
import React, { useState } from 'react';

const category = [
  {
    color: 'red',
    from: {
      height: '1px',
    },
    to: {
      height: '60px',
    },
    config: {
      mass: 10,
    },
  },
  {
    color: 'green',
    from: {
      height: '1px',
    },
    to: {
      height: '80px',
    },
    config: {
      mass: 10,
    },
  },
  {
    color: 'blue',
    from: {
      height: '1px',
    },
    to: {
      height: '50px',
    },
    config: {
      mass: 6,
    },
  },
  {
    color: 'orange',
    from: {
      height: '1px',
    },
    to: {
      height: '88px',
    },
    config: {
      mass: 13,
    },
  },
  {
    color: 'purple',
    from: {
      height: '1px',
    },
    to: {
      height: '90px',
    },
    config: {
      mass: 13,
      clamp: true,
    },
  },
  {
    color: 'yellow',
    from: {
      height: '1px',
    },
    to: {
      height: '80px',
    },
    config: {
      mass: 10,
    },
  },
];

const Springs = () => {
  const [visible, setVisible] = useState(true);
  const springs = useSprings(
    category.length,
    category.map(({ color, ...config }) => ({
      ...config,
      reset: true,
      reverse: visible,
    })),
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          height: '400px',
          margin: '10px',
        }}
      >
        {springs.map((spring, index) => {
          return (
            <animated.div
              key={category[index].color}
              style={{
                ...spring,
                backgroundColor: category[index].color,
                width: '20px',
              }}
            ></animated.div>
          );
        })}
      </div>
      <button onClick={() => setVisible(!visible)}>切换</button>
    </div>
  );
};

const useSpringsExample = () => {
  return <Springs />;
};

export default useSpringsExample;
