import React, {useState, useContext} from 'react';
import './App.css';
import Question from './components/Question';
import {QuizContext} from './QuizContext';
import Modal from './components/Modal';
import Form from './components/Form';

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [whatYouChose, setWhatYouChose] = useState('')
  const {createQuiz, setCreateQuiz, existingQuestions, setExistingQuestions, results, setResults, yourCorrectAnswers, setYourCorrectAnswers, show, setShow} = useContext(QuizContext)
  const [choice, setChoice] = useState(true) //will be used in Answers.js component to make divs unclickable

  const goToTheNext = (e) => {
    if (questionNumber + 1 < existingQuestions.length) {
      setQuestionNumber(questionNumber + 1)
      setChoice(true)
    } else {
      setResults(true)
      setShow('block')
      setChoice(true)
    }
      e.target.parentNode.children[1].children[0].className = 'wrapper'
      e.target.parentNode.children[1].children[1].className = 'wrapper'
      e.target.parentNode.children[1].children[2].className = 'wrapper'
      e.target.parentNode.children[1].children[3].className = 'wrapper'
  }

  return (
    <>
      {
      (createQuiz) ? (
        <div>
          <Form />
        </div>
      ) : (
        <div>
        <Modal/>
        <Question question={existingQuestions[questionNumber]} next={goToTheNext} choice={choice} choiceSet={setChoice} number={questionNumber} questionNumber={setQuestionNumber}/>        
        </div>
      )
      }
      </>
  );
}

export default App;
