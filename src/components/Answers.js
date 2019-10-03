import React, { useContext } from 'react';
import AdlibContext from '../context/adlib-context';
import AnswerInput from './AnswerInput';
import db from '../firebase/firebase';

const Answers = ({ history }) => {
    const { story,
            setAnswers,
            setError } = useContext(AdlibContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let answers = {};
        for (let i = 0; i < e.target.elements.length - 1; i++) {
            const selector = story[i].selector;
            answers = {
                ...answers,
                [selector]: e.target.elements[i].value
            }
        }
        if (Object.values(answers).indexOf('') > -1) {
            setError(true)
        } else {
            setAnswers(answers);
            db.collection('stories').add(answers)
                .then(docRef => {
                    history.push(`/output/${docRef.id}`);
                })
                .catch(error => {
                    console.log('Error adding story to database: ', error);
                });
        }
    };
    
    return (
        <div className="answers">
            <form 
                className="answers-list__form" 
                id="answer-form"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
            {
                story.map(data => (
                    <AnswerInput
                        key={data.selector}
                        name={data.selector}
                        type={data.type}
                        description={data.description}
                    />
                ))
            }
            </form>
        </div>
    );
};

export { Answers as default };