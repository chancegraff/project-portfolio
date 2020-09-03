import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Template from './Template';
import Splash from './Splash';
import Resume from './Resume';
import NotFound from './NotFound';


const App: React.FC<{}> = () => {
  return (
    <Template>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/resume" component={Resume} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Template>
  );
};

export default App;
