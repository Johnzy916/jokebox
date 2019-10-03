import React, { Fragment, useContext } from 'react';
import axios from 'axios';
import AdlibContext from '../context/adlib-context';
import Home from './Home';
import Share from './Share';

export default ({ history }) => {
    
    const { setIsLoading,
            setPunchlineVisible,
            setJoke,
            url,
            joke,
            jokeType } = useContext(AdlibContext);
    
    const handleNextJoke = () => {
        setIsLoading(true);
        axios
          .get(url[jokeType], {
            headers: {
              Accept: "application/json"
            }
          })
          .then(response => {
            const data = jokeType === "Dad" ? response.data : response.data[0];
            setPunchlineVisible(false);
            setJoke({
                id: data.id,
                joke: data.joke || 'Everybody needs a few Dad jokes in their life!',
                type: data.type,
                setup: data.setup || 'These jokes have a punchline.',
                punchline: data.punchline || 'This is a punchline!'
            });
            setIsLoading(false);
          });
    };
    
    return (
        <Fragment>
            <div className="footer__group--nav">
                <Home />
                <Share 
                    joke={jokeType === 'Dad' ? joke.joke : `${joke.setup} ${joke.punchline}`}
                />
            </div>
            <div className="footer__group--joke">
            {
                jokeType !== "Dad" && joke.punchline &&
                <button
                    className="footer__button--punchline"
                    onClick={() => setPunchlineVisible(true)}
                >
                    Punchline!
                </button>
            }
            <button
                className="footer__button"
                onClick={handleNextJoke}
            >
                Next Joke
            </button>
            </div>
        </Fragment>
    );
}