import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <HashRouter><div>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} /></div>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
