import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Hero from '__components__/Hero';
import Block from '__components__/Block';
import ProjectsList from '__components__/ProjectsList';

import { ReactComponent as SandboxSvg } from '__media__/sandbox.svg';

import styles from './index.module.scss';


const getProjects = gql(`
  query {
    projects {
      id
      name
      slug
      shortDescription
    }
  }
`);

const Sandbox: React.FC<{
}> = () => {
  const query = useQuery(getProjects);

  return (
    <div className={styles['sandbox-container']}>
      <Hero>
        <SandboxSvg />
      </Hero>
      <Block>
        <h1 className={styles['sandbox-title']}>Projects In Action</h1>
        <p className={styles['sandbox-description']}>
          {`
            I've created this page with the intent of displaying various projects that I've created.
            Each project has a dedicated page in which it will actually display the application in action.
            You can click through to the project pages to play around with them yourself.
          `}
        </p>
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
