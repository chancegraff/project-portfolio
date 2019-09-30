import React, { useEffect } from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Template from './Template';
import Splash from './Splash';
import Sandbox from './Sandbox';
import Resume from './Resume';
import Project from './Project';
import NotFound from './NotFound';


const App: React.FC<{}> = () => {
  const fetchData = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    console.log(body);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Template>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/sandbox" component={Sandbox} />
        <Route path="/sandbox/:projectSlug" component={Project} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Template>
  );
};

export default App;
