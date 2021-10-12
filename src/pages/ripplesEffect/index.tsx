import * as React from 'react';
import styles from './index.less';

const { useRef, useState, useEffect, useMemo } = React;

const RipplesEffect = () => {
  return (
    <div className={styles.ripples_con}>
      <button className={styles.zoom_btn}>start zoom call</button>
      <div className={styles.ripples_bg}>
        <div className={styles.effect_brand_300}></div>
        <div className={styles.effect_brand_400}></div>
      </div>
    </div>
  );
};

export default RipplesEffect;
