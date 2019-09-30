import React from 'react';

import mutableProjects from '__data__/projects';

import ProjectLink from './ProjectLink';

import styles from './index.module.scss';


const ProjectsList: React.FC<{
  visibleProjects?: number,
}> = (props) => {
  const {
    visibleProjects = mutableProjects.length,
  } = props;

  const allProjects = [
    ...mutableProjects,
  ];

  return (
    <div className={styles['projects-list-container']}>
      {allProjects.slice(0, visibleProjects).map((project) => (
        <ProjectLink
          key={project.name}
          project={project}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
