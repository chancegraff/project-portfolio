import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import Template from './Template';
import Splash from './Splash';
import Sandbox from './Sandbox';
import Resume from './Resume';

const App: React.FC<{}> = () => (
  <Template>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/sandbox" component={Sandbox} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  </Template>
);

export default App;
