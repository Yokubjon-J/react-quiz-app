import React, {useState, useContext} from 'react'
import { QuizContext } from '../QuizContext'

const Modal = () => {

    //const [displayValue, setDisplayValue] = useState('block')
    const {createQuiz, setCreateQuiz, displayValue, setDisplayValue} = useContext(QuizContext)
    
    const hideWindow = () => {
        setDisplayValue(false);
        //console.log(displayValue)
    }

    return (
        <div className='benclosing' style={{display: displayValue}}>
        <div className='modal'>
            <h1>Welcome!</h1>
            <p>Do you want to take an existing quiz or create your own?</p>
            <button onClick={()=>{
                setDisplayValue('none')
            }} >Existing quiz</button>
            <button id='myBtn' 
            onClick={()=>{
                setCreateQuiz('none')
                }} >Create your own</button>
        </div>
        </div>
    )
}

export default Modal
