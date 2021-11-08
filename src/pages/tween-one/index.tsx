import * as React from 'react';
import './index.less';
import TweenOne from 'rc-tween-one';

const { useRef, useState, useEffect, useMemo } = React;

interface TweenOneProps {}

const defaultProps: TweenOneProps = {};

const TweenOneExample: React.FC<TweenOneProps> = (
  props: React.PropsWithChildren<TweenOneProps> = defaultProps,
) => {
  const {} = props;

  return (
    <TweenOne
      animation={{
        x: 80, //让code-box-shape向右移动80
        scale: 0.5, //缩小50%
        rotate: 180, //旋转120度
        yoyo: true, // 动画执行完后返回
        repeat: -1, // 循环播放
        duration: 1000, //动画开始到结束用1秒
      }}
      paused={false} // pause控制暂停/启动动画
      className="box-shape"
    />
  );
};

export default TweenOneExample;
