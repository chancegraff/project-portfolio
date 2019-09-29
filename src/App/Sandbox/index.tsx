import React from 'react';

import Hero from '__components__/Hero';
import Block from '__components__/Block';

import { ReactComponent as SandboxSvg } from '__svgs__/sandbox.svg';

import styles from './index.module.scss';


const Sandbox: React.FC<{
}> = (props) => {
  return (
    <div className={styles['sandbox-container']}>
      <Hero>
        <SandboxSvg />
      </Hero>
      <Block>
        <span>About</span>
      </Block>
      <Block
        color="white"
      >
        <span>About</span>
      </Block>
    </div>
  );
};

export default Sandbox;
