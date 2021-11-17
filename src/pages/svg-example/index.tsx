import * as React from 'react';

const { useState, useEffect, useRef } = React;

const SvgExample = () => {
  let isDrawLine = false;
  let slideLineLength = 0;
  const lineStartPos = 100;
  const lineStopPos = 800;

  const lineRef = useRef(null) as React.MutableRefObject<any>;
  const circleRef = useRef(null) as React.MutableRefObject<any>;

  const scrollDraw = () => {
    let currentTop = document.documentElement.scrollTop;

    if (currentTop > lineStopPos) {
      isDrawLine = true;
    }
    if (currentTop > lineStopPos) {
      window.removeEventListener('scroll', scrollDraw);
    }
    if (!isDrawLine && lineStartPos < currentTop && currentTop < lineStopPos) {
      drawLine(false);
    }
  };

  const initDraw = () => {
    slideLineLength = lineRef.current?.getTotalLength();
    console.log('弧线总长: ', slideLineLength);

    lineRef.current.style.strokeDasharray = slideLineLength;
    lineRef.current.style.strokeDashoffset = slideLineLength;

    let currentTop = document.documentElement.scrollTop;
    if (lineStartPos < currentTop && currentTop < lineStopPos) {
      drawLine(false);
    }
    if (currentTop > lineStopPos) {
      drawLine(true);
    }
  };

  const drawLine = (isComplete: boolean) => {
    let scrollPercent = 1;
    if (!isComplete) {
      scrollPercent =
        (document.documentElement.scrollTop - lineStartPos) /
        (lineStopPos - lineStartPos);
    }

    let draw = slideLineLength * scrollPercent;
    lineRef.current.style.strokeDashoffset = slideLineLength - draw;

    const point = lineRef.current?.getPointAtLength(draw);
    console.log('末点位置坐标: ', point);

    circleRef.current.setAttribute('cx', point.x);
    circleRef.current.setAttribute('cy', point.y);
  };

  useEffect(() => {
    initDraw();
    window.addEventListener('scroll', scrollDraw);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '2000px',
        marginTop: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <svg
        width="401"
        height="644"
        viewBox="0 0 401 644"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={lineRef}
          d="M398.5 2 C347 9.5 290.148 71.2594 279 245.5 C264.269 475.753 165.5 603.5 22 617.998"
          stroke="#FEC80E"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          ref={circleRef}
          cx="19"
          cy="624.998"
          r="16"
          fill="white"
          stroke="#FEC80E"
          strokeWidth="6"
        />
      </svg>
    </div>
  );
};

export default SvgExample;
