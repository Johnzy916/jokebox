import React, { Fragment, useEffect, useContext } from 'react';
import AdlibContext from '../context/adlib-context';
import Home from './Home';
import Share from './Share';

export default ({ history, match }) => {
    
    const { setError } = useContext(AdlibContext);
    
    useEffect(() => {
       return () => setError(false);
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <Fragment>
            <div className="footer__group--nav">
                <Home />
                <Share 
                    match={match}
                />
            </div>
            <button
                className="footer__button"
                type="submit"
                form="answer-form"
            >
                Read your story
            </button>
        </Fragment>
    );
};