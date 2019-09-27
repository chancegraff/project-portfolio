import React from 'react';

import Hero from '__components__/Hero';
import Block from '__components__/Block';

import { ReactComponent as HeroSvg } from '__svgs__/splash.svg';

import styles from './index.module.scss';


const Splash: React.FC<{}> = () => {
  return (
    <div className={styles['splash-container']}>
      <Hero>
        <HeroSvg />
      </Hero>
      <Block>
        <h1>Speed, Meet Excellence</h1>
      </Block>
    </div>
  );
};

export default Splash;
