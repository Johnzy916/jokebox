import React, { useEffect } from 'react';
import initializeFacebookSDK from '../facebook/sdk';

import { MdShare } from 'react-icons/md';

export default ({ match, outputText, joke, shareType }) => {
    
    useEffect(() => {
        initializeFacebookSDK();
    }, []);
    
    const sharePostDialog = () => {
        FB.ui(
          {
            method: 'share',
            href: shareType === 'output' ?
                `https://www.angusdev.com/output/${match.params.id}` :
                `https://www.angusdev.com/`,
            quote: outputText || joke || ''
          },
          // callback
          function(response) {
            if (response && response.error_message) {
              alert('Sorry, something went wrong');
            }
          }
        );
    }
    
    return (
        <MdShare 
            className="react-icons--share"
            onClick={sharePostDialog}
        />
    );
}

/* global FB */