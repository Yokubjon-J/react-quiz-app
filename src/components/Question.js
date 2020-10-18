import React, {useContext, useState} from 'react';
import {QuizContext} from '../QuizContext';
import './Question.css';
import '../App.css';
import Answers from './Answers';

function Question(props) {
    const {results, setResults, show, setShow, createQuiz, setCreateQuiz, existingQuestions, display, setDisplay} = useContext(QuizContext)
    let {yourCorrectAnswers, setYourCorrectAnswers} = useContext(QuizContext)

    return (
        <div className='container'>

            { (results) ? (
               <div style={{display: show}} className='modal'>
                   <h1>Your results</h1>
                   <p>You have answered {yourCorrectAnswers} questions correctly out of {existingQuestions.length}</p>
                   <button onClick={()=>{
                       setShow('none')
                       props.questionNumber(0)
                       setResults(false)
                       setYourCorrectAnswers(0)
                   }}>Start over again</button>
                   <button onClick={()=>{
                       window.location.reload(false);
                   }}>Home page</button>
               </div>
            ) : (
            <div className='enclosing'>  
            <div className='question'>
            <h3>Question {props.number+1}/{existingQuestions.length}</h3>    
                <p>{props.question.question}</p>
            </div>
    
            <div className='second'>
                <Answers answer={props.question.answer_a} correct={props.question.correct_answer} choice={props.choice} choiceSet={props.choiceSet}/>
                <Answers answer={props.question.answer_b} correct={props.question.correct_answer} choice={props.choice} choiceSet={props.choiceSet}/>
                <Answers answer={props.question.answer_c} correct={props.question.correct_answer} choice={props.choice} choiceSet={props.choiceSet}/>
                <Answers answer={props.question.answer_d} correct={props.question.correct_answer} choice={props.choice} choiceSet={props.choiceSet}/>
            </div>
    
                <button onClick={props.choice ? ()=>{setDisplay('block')} : props.next} className='btn'>
                    Next question
                </button>

                <div style={{display: display}} className='warning'>Please, select an option to continue</div>

            </div>
            )
        }

        </div>
    )
}

export default Question