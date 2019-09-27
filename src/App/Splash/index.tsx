import React from 'react';

import Hero from '__components__/Hero';

import styles from './index.module.scss';


const Splash: React.FC<{}> = () => {
  return (
    <div className={styles['splash-container']}>
      <Hero>
        <span>Chance</span>
      </Hero>
      <div className={styles['about-container']}>
        <span>About</span>
      </div>
    </div>
  );
};

export default Splash;
