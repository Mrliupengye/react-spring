import { animated, useTrail } from 'react-spring';
import React, { useState } from 'react';

const categoryColor = ['red', 'green', 'blue', 'orange', 'yellow', 'purple'];

const Trails = () => {
  const [visible, setVisible] = useState(false);
  const springs = useTrail(categoryColor.length, {
    from: {
      height: '1px',
    },
    to: {
      height: '200px',
    },
    config: {
      mass: 20,
      clamp: true,
    },
    reset: true,
    reverse: visible,
  });

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
          margin: '10px',
          height: '400px',
        }}
      >
        {springs.map((spring, index) => {
          return (
            <animated.div
              key={categoryColor[index]}
              style={{
                ...spring,
                backgroundColor: categoryColor[index],
                width: '60px',
              }}
            ></animated.div>
          );
        })}
      </div>
      <button onClick={() => setVisible(!visible)}>切换</button>
    </div>
  );
};

const useTrailExample = () => {
  return <Trails />;
};

export default useTrailExample;
