import React from 'react';
import { Link } from 'react-router-dom';
import { generateProjectUrl } from 'utils';

import styles from './index.module.scss';


const ProjectLink: React.FC<{
  project: IProject,
}> = (props) => {
  const {
    project,
  } = props;

  return (
    <div className={styles['project-link-container']}>
      <Link className={styles['project-link']} to={generateProjectUrl(project.slug)}>
        {project.name}
      </Link>
    </div>
  );
};

export default ProjectLink;
