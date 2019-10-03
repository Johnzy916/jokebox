import React, { Fragment, useContext } from 'react';
import AdlibContext from '../context/adlib-context';
import Home from './Home';
import Share from './Share';

export default ({ history, match }) => {
    
    const { setAnswers,
            outputText } = useContext(AdlibContext);
    
    return (
        <Fragment>
            <div className="footer__group--nav">
                <Home />
                <Share
                    match={match}
                    outputText={outputText}
                    shareType="output"
                />
            </div>
            <button
                className="footer__button"
                onClick={() => {
                    setAnswers({});
                    history.push('/');
                }}
            >
                Try again
            </button>
        </Fragment>
    );
};