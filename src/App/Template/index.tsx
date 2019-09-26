import React from 'react';

import styles from './index.module.scss';

const Template: React.FC<{}> = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={styles['template-container']}>
      <header>
        <h1>Chance Graff</h1>
      </header>
      {children}
    </div>
  );
};

export default Template;
