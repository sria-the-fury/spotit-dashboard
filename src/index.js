import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


serviceWorkerRegistration.unregister();

