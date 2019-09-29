import React from 'react';

import Hero from '__components__/Hero';
import Block from '__components__/Block';

import { ReactComponent as SandboxSvg } from '__svgs__/sandbox.svg';

import styles from './index.module.scss';


const Details: React.FC<{
  project: IProject,
}> = (props) => {
  const {
    project,
  } = props;

  return (
    <div className={styles['details-container']}>
      <Hero>
        <SandboxSvg />
      </Hero>
      <Block className={styles['description-block']}>
        <h1 className={styles['description-title']}>{project.name}</h1>
        <p className={styles['description-paragraph']}>{project.description}</p>
      </Block>
      <Block
        color="white"
        className={styles['details-block']}
      >
        Details!
      </Block>
    </div>
  );
};

export default Details;
