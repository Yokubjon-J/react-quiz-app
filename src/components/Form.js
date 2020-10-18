import React, {useState, useContext, useEffect} from 'react';
import './Question.css';
import {QuizContext} from '../QuizContext';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal'


const Form = () => {

    let {yourQuestions, setYourQuestion, setExistingQuestions, existingQuestions, createQuiz, setCreateQuiz, displayValue, setDisplayValue} = useContext(QuizContext)
    let [value, setValue] = useState('none')
    return (
    <div style={{textAlign: 'center'}}>
            
            <div>
            <button onClick={()=>{
                setYourQuestion(yourQuestions => {
                    return (
                    yourQuestions = [...yourQuestions, {
                        id: uuidv4(),
                        answer_a: '',
                        answer_b: '',
                        answer_c: '',
                        answer_d: '',
                        correct_answer: ''
                    }] )
                })
            }} className='btn1'>Add the next question</button>
            <button 
            onClick={()=>{
                setCreateQuiz(false)
            }} className='btn1'>Discard</button>
            </div>

            {yourQuestions.map((question, index, array)=>{
                return (
                    <div key={question.id} className='input-area'>
                    <input style={{width: 50+'%'}} value={question.question} 
                    onChange={(e)=>{
                        let val = e.target.value
                        setYourQuestion( (yourQuestions) => {
                            return yourQuestions.map( (currentQuestion)=>{
                                return (currentQuestion.id === question.id ? {
                                    ...currentQuestion,
                                    question: val
                                } : currentQuestion)
                                
                            } )
                        } )
                    } } /><span></span><br/>
                    <input style={{width: 40 + '%'}} value={question.answer_a} 
                    onChange={(e)=>{
                        let val = e.target.value
                        setYourQuestion( (yourQuestions) => {
                            return yourQuestions.map( (currentQuestion)=>{
                                return (currentQuestion.id === question.id ? {
                                    ...currentQuestion,
                                    answer_a: val
                                } : currentQuestion)
                                
                            } )
                        } )
                    } } /> <span></span> <br/>
                    <input style={{width: 40 + '%'}} value={question.answer_b} 
                    onChange={(e)=>{
                        let val = e.target.value
                        setYourQuestion( (yourQuestions) => {
                            return yourQuestions.map( (currentQuestion)=>{
                                return (currentQuestion.id === question.id ? {
                                    ...currentQuestion,
                                    answer_b: val
                                } : currentQuestion)
                                
                            } )
                        } )
                    } } /> <span></span> <br/>
                    <input style={{width: 40 + '%'}} value={question.answer_c} 
                    onChange={(e)=>{
                        let val = e.target.value
                        setYourQuestion( (yourQuestions) => {
                            return yourQuestions.map( (currentQuestion)=>{
                                return (currentQuestion.id === question.id ? {
                                    ...currentQuestion,
                                    answer_c: val
                                } : currentQuestion)
                                
                            } )
                        } )
                    } } /> <span></span> <br/>
                    <input style={{width: 40 + '%'}} value={question.answer_d} 
                    onChange={(e)=>{
                        let val = e.target.value
                        setYourQuestion( (yourQuestions) => {
                            return yourQuestions.map( (currentQuestion)=>{
                                return (currentQuestion.id === question.id ? {
                                    ...currentQuestion,
                                    answer_d: val
                                } : currentQuestion)
                                
                            } )
                        } )
                    } } /> <span></span> <br/>
                    <input style={{width: 50 + '%'}} placeholder='Type the correct answer again...' value={question.correct_answer} 
                    onChange={(e)=>{
                        let val = e.target.value
                        setYourQuestion( (yourQuestions) => {
                            return yourQuestions.map( (currentQuestion)=>{
                                return (currentQuestion.id === question.id ? {
                                    ...currentQuestion,
                                    correct_answer: val
                                } : currentQuestion)
                                
                            } )
                        } )
                    } } /> <span></span> <br/>
            { yourQuestions.length !== 1 ? (
                    <button onClick={ () => {
                        setYourQuestion( yourQuestions => {
                            return (
                                yourQuestions.filter(currentQuestion => currentQuestion.id !== question.id)
                                )
                        } ) }
                    }>X</button> 
                    ) : ''
            }
                    </div>
                )
            })}
            <button 
            onClick={()=>{
                if (yourQuestions.length >= 4 && yourQuestions.map((x)=>{return Object.values(x).some( y => { return y === null || y === '' } ) } ).every(x => {return x === false}) &&
                !yourQuestions.map(x => {return x.correct_answer === x.answer_a || x.correct_answer === x.answer_b || x.correct_answer === x.answer_c || x.correct_answer === x.answer_d
                }).some(y => {return y === false}) ) {
                    setExistingQuestions(yourQuestions) //changes the content of existing questions
                    setCreateQuiz(false) //causes App.js to re-render
                    setDisplayValue('none'); //hides modal window
            } else {
                setValue('block') 
            }
            }} className='btn' >Ready!</button>

            {console.log(JSON.stringify(yourQuestions, null, 2))}

            <div style={{display: value}}  >
            <h1>Too few questions</h1>
            <p>You should at least compose 4 questions.</p>
            <p>No empty fields. Correct answer must match letter</p>
            <p>by letter with one of the options above.</p>
            <button onClick={()=>{
                setValue('none')
            }}>OK</button>
            </div> 

            
        </div>           
    )
}

export default Form

/* old code: if (yourQuestions.length >= 4 && Object.values(yourQuestions[0]).some( x => { return x !== null && x !== '' } ) && 
                Object.values(yourQuestions[1]).some( x => { return x !== null && x !== '' } ) && 
                Object.values(yourQuestions[2]).some( x => { return x !== null && x !== '' } ) && 
                Object.values(yourQuestions[3]).some( x => { return x !== null && x !== '' } ) &&
                (yourQuestions[0].correct_answer === yourQuestions[0].answer_a || yourQuestions[0].correct_answer === yourQuestions[0].answer_b || yourQuestions[0].correct_answer === yourQuestions[0].answer_c || yourQuestions[0].correct_answer === yourQuestions[0].answer_d) &&
                (yourQuestions[1].correct_answer === yourQuestions[1].answer_a || yourQuestions[1].correct_answer === yourQuestions[1].answer_b || yourQuestions[1].correct_answer === yourQuestions[1].answer_c || yourQuestions[1].correct_answer === yourQuestions[1].answer_d) &&
                (yourQuestions[2].correct_answer === yourQuestions[2].answer_a || yourQuestions[2].correct_answer === yourQuestions[2].answer_b || yourQuestions[2].correct_answer === yourQuestions[2].answer_c || yourQuestions[2].correct_answer === yourQuestions[2].answer_d) &&
                (yourQuestions[3].correct_answer === yourQuestions[3].answer_a || yourQuestions[3].correct_answer === yourQuestions[3].answer_b || yourQuestions[3].correct_answer === yourQuestions[3].answer_c || yourQuestions[3].correct_answer === yourQuestions[3].answer_d)) {
                    setExistingQuestions(yourQuestions) //changes the content of existing questions
                    setCreateQuiz(false) //causes App.js to re-render
                    setDisplayValue('none'); //hides modal window
            } */

/* yourQuestions.map((x)=>{return Object.values(x).some( y => { return y === null || y === '' } ) } ).every(x => {return x === false}) */
//                                                |                                                   |
//                                                |                                                   this part checks if every element of the returned array equals false, if it does it returns true
//                                                up to this part, it returns [false, false, false, false] because not any y equals null or ''.