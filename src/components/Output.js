import React, { useContext, useEffect } from 'react';
import AdlibContext from '../context/adlib-context';
import db from '../firebase/firebase';

const Output = ({ history, match }) => {
    
    const { answers, 
            setAnswers,
            setOutputText } = useContext(AdlibContext);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const doc = await db.collection("stories").doc(`${match.params.id}`).get();
                if (doc.exists) {
                    setAnswers(doc.data());
                } else {
                    history.push('/');
                }
            } catch(error) {
                history.push('/');
                console.log('Error getting document: ', error);
            }
        }
            fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        if (answers) {
            const liveOutputText = document.getElementById('outputDiv').textContent;
            setOutputText(liveOutputText);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answers]);
    
    return (
        <div className="output">
            <h3 className="output__text" id="outputDiv">
                So, I walked into <span>{answers._PLACE_}</span> and immediately felt <span>{answers._EMOTION_}</span> -- everyone yelled "<span>{answers._FUNNYWORD_}</span>" at the exact same time! Suddenly, my attention was drawn to that <span>{answers._ADJECTIVE_} {answers._INSULT_}</span> <span>{answers._NAME_}</span> just <span>{answers._VERBING_}</span> in the corner. I knew I had no choice - I <span>{answers._VERBED_}</span> towards the middle of the <span>{answers._SPACE_}</span> before I grabbed my <span>{answers._BODYPART_}</span> and agreed: "lets go halves on a <span>{answers._ANIMAL_}</span>."
            </h3>
        </div>
    );
};

export { Output as default };