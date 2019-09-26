import React from 'react';

import './index.module.scss';

const Template: React.FC<{}> = (props) => {
  const {
    children,
  } = props;

  return (
    <div>
      <header>
        <h1>Chance Graff</h1>
      </header>
      {children}
    </div>
  );
};

export default Template;
