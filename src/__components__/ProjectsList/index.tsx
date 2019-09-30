import React from 'react';
import { QueryResult } from '@apollo/react-common';

import QueryHandler from '__components__/QueryHandler';

import styles from './index.module.scss';

import ProjectLink from './ProjectLink';


interface IData {
  projects: Array<IProject>,
}

const ProjectsList: React.FC<{
  projectsQuery: QueryResult<IData>,
  visibleProjects?: number,
}> = (props) => {
  const {
    projectsQuery,
  } = props;

  return (
    <div className={styles['projects-list-container']}>
      <QueryHandler<IData>
        query={projectsQuery}
        loadingNode={<span>Loading</span>}
        errorNode={<span>Error</span>}
      >
        {({ projects }): React.ReactNodeArray => projects.map((project) => (
          <ProjectLink
            key={project.name}
            project={project}
          />
        ))}
      </QueryHandler>
    </div>
  );
};

export default ProjectsList;
