import React from 'react';
import { QueryResult } from '@apollo/react-common';

import QueryHandler from '__components__/QueryHandler';

import styles from './index.module.scss';

import ProjectLink from './ProjectLink';


const ProjectsList: React.FC<{
  projectsQuery: QueryResult<{
    projects: Array<IProject>,
  }>,
  visibleProjects?: number,
}> = (props) => {
  const {
    projectsQuery,
  } = props;

  return (
    <div className={styles['projects-list-container']}>
      <QueryHandler
        query={projectsQuery}
        loadingNode={<span>Loading</span>}
        errorNode={<span>Error</span>}
      >
        {({ projects }): React.ReactChildren => projects.map((project: IProject) => (
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
