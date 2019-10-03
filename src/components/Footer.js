import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import AdlibContext from '../context/adlib-context';
import IndexFooter from './IndexFooter';
import OutputFooter from './OutputFooter';
import JokeboxFooter from './JokeboxFooter';
import AdlibFooter from './AdlibFooter';

const Footer = ({ history, match }) => {
    
    const { error } = useContext(AdlibContext);
            
    return (
        <div className="container no-margin-small-phones">
            {
                error &&
                <p className="error">
                    Please fill out the whole form
                </p>
            }
            <div className="footer">
                <Switch>
                    <Route exact path="/" component={IndexFooter} />
                    <Route path="/adlib" component={AdlibFooter} />
                    <Route exact path="/jokebox" render={() => (
                        <JokeboxFooter history={history} />
                    )} />
                    <Route path="/output/:id" render={() => (
                        <OutputFooter history={history} match={match} />
                    )} />
                </Switch>
            </div>
        </div>
    );
};

export { Footer as default };