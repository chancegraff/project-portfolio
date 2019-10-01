import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Hero from '__components__/Hero';
import Block from '__components__/Block';
import ProjectsList from '__components__/ProjectsList';

import { ReactComponent as SandboxSvg } from '__media__/sandbox.svg';

import styles from './index.module.scss';


const Sandbox: React.FC<{
}> = () => {
  const query = useQuery(gql(`
    query {
      projects {
        id
        name
        slug
        shortDescription
      }
    }
  `));

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
        <ProjectsList projectsQuery={query} />
      </Block>
    </div>
  );
};

export default Sandbox;
