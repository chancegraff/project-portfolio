import React from 'react';

import Hero from '__components__/Hero';

import { ReactComponent as HeroSvg } from './hero.svg';

import styles from './index.module.scss';


const Splash: React.FC<{}> = () => {
  return (
    <div className={styles['splash-container']}>
      <Hero>
        <HeroSvg className={styles['hero-svg']} />
      </Hero>
      <div className={styles['about-container']}>
        <div className={styles['about']}>
          <h1>Speed, Meet Excellence</h1>
        </div>
      </div>
    </div>
  );
};

export default Splash;
