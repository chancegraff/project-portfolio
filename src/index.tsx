import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';
import ScrollToTop from './ScrollToTop';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
