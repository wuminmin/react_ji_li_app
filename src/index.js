import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </HashRouter>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
