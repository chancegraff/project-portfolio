import React from 'react';

import styles from './index.module.scss';

const Splash: React.FC<{}> = () => {
  return (
    <div className={styles['splash-container']}>
      <span>Splash page</span>
    </div>
  );
};

export default Splash;
