import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Options from '../components/Options';
import Answers from '../components/Answers';
import Output from '../components/Output';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jokebox from '../components/Jokebox';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="main-container">
        <Route path="/" component={Header} />
        <div className="container main-content">
            <Switch>
                <Route exact path="/" component={Options} />
                <Route exact path="/adlib" component={Answers} />
                <Route exact path="/jokebox" component={Jokebox} />
                <Redirect exact from="/output" to="/" />
                <Route path="/output/:id" component={Output} />
                <Route component={Options} />
            </Switch>
        </div>
        <Route path="/" component={Footer} />
        </div>
    </Router>
);

export { AppRouter as default };