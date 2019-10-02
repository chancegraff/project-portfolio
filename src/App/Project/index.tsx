import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import Hero from '__components__/Hero';
import Block from '__components__/Block';
import QueryHandler from '__components__/QueryHandler';

import { ReactComponent as SandboxSvg } from '__media__/sandbox.svg';
import loader from '__media__/loader.gif';

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

const redirectNode = <Redirect to="/404" />;

const Project: React.FC<RouteComponentProps<{
  projectSlug: string,
}>> = (props) => {
  const [
    isFrameLoaded,
    setIsFrameLoaded,
  ] = useState(false);

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

  const renderContainerNode = (
    project: IProject | undefined | null = undefined,
  ): React.ReactNode => (
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
        {project && (
          <div className={styles['details-frame-container']}>
            {isFrameLoaded === false && (
              <div className={styles['details-frame-loader']}>
                <img className={styles['loader-image']} src={loader} alt="Spinning icon" />
                <h3 className={styles['loader-text']}>Please wait while the application is started.</h3>
              </div>
            )}
            <iframe
              className={styles['details-frame']}
              src={project.herokuUrl}
              title={project.name}
              onLoad={(): void => setIsFrameLoaded(true)}
            />
          </div>
        )}
      </Block>
    </div>
  );

  return (
    <QueryHandler<{ project: IProject }>
      query={query}
      loadingNode={renderContainerNode()}
      errorNode={redirectNode}
    >
      {({ project }): React.ReactNode => renderContainerNode(project)}
    </QueryHandler>
  );
};

export default Project;
