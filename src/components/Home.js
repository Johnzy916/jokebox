import React from 'react';
import { Link } from 'react-router-dom';

import { MdHome } from 'react-icons/md';

export default () => {
    
    return (
        <Link to='/'>
            <MdHome className="react-icons--home" />
        </Link>
    );
}