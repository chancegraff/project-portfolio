import React from 'react';

import styles from './index.module.scss';


const ProjectsList: React.FC<{
  recent?: boolean,
}> = () => {
  return (
    <div className={styles['projects-list-container']}>
      Projects
    </div>
  );
};

export default ProjectsList;
