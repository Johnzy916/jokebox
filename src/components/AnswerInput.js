import React from 'react';

const AnswerInput = ({ name, type, description }) => {
    
    return (
        <div className="answer">
            <input 
                className="answer__input"
                type="text"
                name={name}
            />
            <div className="answer__info">
            <span className="answer__type">
                {type}
            </span>
            <span className="answer__description">
                {description}
            </span>
            </div>
        </div>
    );
};

export { AnswerInput as default };