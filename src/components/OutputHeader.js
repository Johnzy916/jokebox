import React, { Fragment, useContext } from 'react';
import AdlibContext from '../context/adlib-context';

export default () => {
    
    const { answers } = useContext(AdlibContext);
    
    return (
        <Fragment>
            <h1 className="header__title">
                My night in <span>{answers._HOMETOWN_}</span>
            </h1>
            <p className="header__text">A short coming of age story</p>
        </Fragment>
    );
}