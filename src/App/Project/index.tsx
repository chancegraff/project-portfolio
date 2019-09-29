import React from 'react';
import { RouteComponentProps } from 'react-router';

import Hero from '__components__/Hero';
import Block from '__components__/Block';

import { ReactComponent as SandboxSvg } from '__svgs__/sandbox.svg';

import styles from './index.module.scss';


const ProjectPage: React.FC<RouteComponentProps<{
  projectSlug: string,
}> & {
  project: IProject,
}> = (props) => {
  const {
    project,
  } = props;

  return (
    <div className={styles['project-container']}>
      <Hero>
        <SandboxSvg />
      </Hero>
      <Block className={styles['description-block']}>
        <h1 className={styles['description-title']}>{project.name}</h1>
        <p className={styles['description-paragraph']}>{project.description}</p>
      </Block>
      <Block
        color="white"
        className={styles['project-block']}
      >
        Project!
      </Block>
    </div>
  );
};

export default ProjectPage;
