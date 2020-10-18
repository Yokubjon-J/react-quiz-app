import React from 'react';
import './Answers.css';
import { useContext } from 'react';
import { QuizContext } from '../QuizContext';

function Answers(props) {

    let {yourCorrectAnswers, setYourCorrectAnswers, display, setDisplay} = useContext(QuizContext)

    let check = (e) => {
        let val = e.target.innerHTML;
        let tar = e.target;
        if (val.toUpperCase() === props.correct.toUpperCase()) {
            tar.className='wrapperTrue'
            setYourCorrectAnswers(yourCorrectAnswers+1)
        } else {
            tar.className='wrapperFalse'
        }
            setDisplay('none')
            props.choiceSet(false)
        return ;
    }

    const whenKeyPressed = e => {
        const enterOrSpace =
          e.key === "Enter" ||
          e.key === " " ||
          e.key === "Spacebar" ||
          e.which === 13 ||
          e.which === 32;
        if (enterOrSpace) {
          e.preventDefault();
          check(e);
        }
      };

    return (
        <div role='button' tabIndex={0} onKeyPress={whenKeyPressed} className='wrapper' onClick={props.choice ? check : undefined} style={{pointerEvents: true}}>
            {props.answer}
        </div>
    )
}

export default Answers