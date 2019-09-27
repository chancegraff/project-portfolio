import React from 'react';

import styles from './index.module.scss';

const Sandbox: React.FC<{}> = () => {
  return (
    <div className={styles['sandbox-container']}>
      <span>Sandbox page</span>
    </div>
  );
};

export default Sandbox;
