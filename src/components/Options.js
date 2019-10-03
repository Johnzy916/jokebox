import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Jokebox = () => {
    
    return (
        <Fragment>
            <p className="choices__intro">What do you want to do?</p>
            <Link to='/jokebox'>
                <div className="choices">
                    <h1 className="choices__header">
                        Jokebox
                    </h1>
                </div>
            </Link>
            <Link to='/adlib'>
                <div className="choices">
                    <h1 className="choices__header">
                        Adlib
                    </h1>
                </div>
            </Link>
        </Fragment>
    );
}

export { Jokebox as default };