import React from 'react';

import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

import styles from './index.module.scss';

import Template from './Template';
import Splash from './Splash';

const App: React.FC<{}> = () => (
  <div className={styles['app-container']}>
    <Template>
      <Switch>
        <Route exact path="/" component={Splash} />
      </Switch>
    </Template>
  </div>
);

export default App;
