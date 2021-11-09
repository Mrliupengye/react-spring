import {
  animated,
  useSpring,
  useSprings,
  useTrail,
  useChain,
  config,
} from 'react-spring';
import React, { useRef, useState } from 'react';
import './index.css';

// useSprings
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
      mass: 20,
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
      height: '120px',
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
      // loop: { reverse: true }, // 循环 loop中增加reverse=true不会有卡顿视觉
      reverse: visible,
    })),
  );
  return (
    <>
      <div className="wrapper">
        {springs.map((spring, index) => {
          return (
            <animated.div
              key={category[index].color}
              className="spring"
              style={{
                ...spring,
                backgroundColor: category[index].color,
              }}
            ></animated.div>
          );
        })}
      </div>
      <button onClick={() => setVisible((v) => !v)} className="myBtn">
        切换
      </button>
    </>
  );
};

// useTrail
const categoryColor = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];
const Trails = () => {
  const [visible, setVisible] = useState(true);
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
    <div className="wrapper">
      {springs.map((spring, index) => {
        return (
          <animated.div
            key={categoryColor[index]}
            className="spring"
            style={{
              ...spring,
              backgroundColor: categoryColor[index],
            }}
          ></animated.div>
        );
      })}
      <button onClick={() => setVisible((v) => !v)} className="myBtn">
        切换
      </button>
    </div>
  );
};

// useChain
const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];
const Chain = () => {
  const [expanded, setExpanded] = useState(false);

  const springRef = useRef();
  const springConfig = {
    from: { transform: `translateX(80px)` },
    to: { transform: `translateX(0px)` },
    ref: springRef,
    config: config.stiff,
    reverse: expanded,
  };
  const spring = useSpring(springConfig);

  const trailRef = useRef();
  const trailConfig = {
    from: { height: '5px' },
    to: { height: '80px' },
    ref: trailRef,
    reverse: !expanded,
  };

  const trailSprings = useTrail(colors.length, trailConfig);
  useChain(expanded ? [springRef, trailRef] : [trailRef, springRef]);

  return (
    <div style={{ height: '500px' }} className="wrapper">
      <animated.div
        style={{
          ...spring,
          height: '100px',
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
              width: '20px',
              marginRight: '10px',
              transformOrigin: 'bottom',
              backgroundColor: colors[index],
            }}
          />
        ))}
      </animated.div>
      <div>
        <button
          className="myBtn"
          onClick={() => {
            setExpanded((prevState) => !prevState);
          }}
        >
          切换
        </button>
      </div>
    </div>
  );
};

const useSpringsExample = () => {
  return (
    <div className="App">
      <Springs />
      <Trails />
      {/* <Chain /> */}
    </div>
  );
};

export default useSpringsExample;
