import React, { useState } from 'react';
import AdlibContext from '../context/adlib-context';
import { IconContext } from 'react-icons';
import storyData from '../stories/the-room';
import AppRouter from '../routers/AppRouter';
import shuffleArray from '../selectors/shuffleArray';

const AdLib = () => {
  
  const [ story ] = useState(shuffleArray(storyData.questions));
  const [answers, setAnswers] = useState({});
  const [ error, setError ] = useState(false);
  const [ outputText, setOutputText ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ jokeType, setJokeType ] = useState('Dad');
  const [ joke, setJoke ] = useState({ 
      joke: 'Welcome to the Jokebox!',
      setup: 'These jokes have a punchline.',
      punchline: 'This is a punchline!'
  });
  const [ punchlineVisible, setPunchlineVisible ] = useState(false);
  const [ url ] = useState({
      Dad: 'https://icanhazdadjoke.com/',
      Programming: 'https://official-joke-api.appspot.com/jokes/programming/random',
      Random: 'https://official-joke-api.appspot.com/jokes/general/random'
  });
    
  return (
    <AdlibContext.Provider value={{ 
      story, 
      url,
      answers, setAnswers, 
      error, setError,
      outputText, setOutputText,
      jokeType, setJokeType,
      isLoading, setIsLoading,
      joke, setJoke,
      punchlineVisible,setPunchlineVisible
    }}>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <AppRouter />
      </IconContext.Provider>
    </AdlibContext.Provider>
  );
}

export { AdLib as default };