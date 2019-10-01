import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import Hero from '__components__/Hero';
import Block from '__components__/Block';
import QueryHandler from '__components__/QueryHandler';

import { ReactComponent as SandboxSvg } from '__media__/sandbox.svg';

import styles from './index.module.scss';


const getProject = gql(`
  query($projectSlug: String!) {
    project(slug: $projectSlug) {
      id
      name
      description
      herokuUrl
    }
  }
`);

const Project: React.FC<RouteComponentProps<{
  projectSlug: string,
}>> = (props) => {
  const {
    match: {
      params: {
        projectSlug,
      },
    },
  } = props;

  const query = useQuery(getProject, {
    variables: {
      projectSlug,
    },
  });

  const redirectNode = <Redirect to="/404" />;
  const renderNode = (project: IProject | undefined | null = undefined): React.ReactNode => (
    <div className={styles['details-container']}>
      {project === null && redirectNode}
      <Hero>
        <SandboxSvg />
      </Hero>
      <Block className={styles['description-block']}>
        <h1 className={styles['description-title']}>{project && project.name}</h1>
        <p className={styles['description-paragraph']}>{project && project.description}</p>
      </Block>
      <Block
        color="white"
        className={styles['details-block']}
      >
        Details!
      </Block>
    </div>
  );

  return (
    <QueryHandler<{ project: IProject }>
      query={query}
      loadingNode={renderNode()}
      errorNode={redirectNode}
    >
      {({ project }): React.ReactNode => renderNode(project)}
    </QueryHandler>
  );
};

export default Project;
