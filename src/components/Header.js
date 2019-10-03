import React from 'react';
import { Route } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import JokeboxHeader from './JokeboxHeader';
import AdlibHeader from './AdlibHeader';
import OutputHeader from'./OutputHeader';

const Header = () => {
    
    return (
        <div className="container container--small-pad">
            <div className="header">
                <Route exact path="/" component={IndexHeader} />
                <Route path="/adlib" component={AdlibHeader} />
                <Route path="/jokebox" component={JokeboxHeader} />
                <Route path="/output/:id" component={OutputHeader} />
            </div>
        </div>
    );
};

export { Header as default };