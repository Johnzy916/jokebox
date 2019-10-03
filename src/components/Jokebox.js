import React, { Fragment, useContext } from 'react';
import AdlibContext from '../context/adlib-context';

const Jokebox = () => {
    
    const { joke,
            jokeType,
            punchlineVisible } = useContext(AdlibContext);
    
    return (
        <Fragment>
            <div className="jokebox jokebox__container">
                <p className="jokebox__joke">
                {
                    jokeType === "Dad" ? joke.joke : joke.setup
                }
                </p>
                
                {
                    punchlineVisible && jokeType !== "Dad" &&
                    <p className="jokebox__punchline">
                        { joke.punchline }
                    </p>
                }
                
            </div>
        </Fragment>
    );
}

export { Jokebox as default };