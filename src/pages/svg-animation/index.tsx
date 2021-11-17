import * as React from 'react';

const SvgAnimation = () => {
  return (
    <div style={{ margin: '60px' }}>
      <div>【SVG animate】随时间动态改变属性</div>
      <svg width="40" height="110" viewBox="0 0 40 110" version="1.1">
        <rect width="40" height="40">
          <animate
            attributeName="y"
            from="-50"
            to="120"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      <div>【animateMotion】使元素沿着动作路径移动</div>
      <svg xmlnsXlink="http://www.w3.org/1999/xlink">
        <path
          id="path1"
          fill="none"
          stroke="lightgrey"
          d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
        />
        <circle r="4" fill="blue">
          <animateMotion dur="10s" repeatCount="indefinite">
            <mpath xlinkHref="#path1" />
          </animateMotion>
        </circle>
      </svg>

      <div>
        【animateTransform】动画上一个目标元素变换属性，从而使动画控制平移，缩放，旋转或倾斜
      </div>
      <svg>
        <polygon points="60,30 90,90 30,90">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 70"
            to="360 60 70"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
    </div>
  );
};

export default SvgAnimation;
