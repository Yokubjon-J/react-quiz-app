import React, {createContext, useState} from 'react';

export const QuizContext = createContext();

export const QuizContextProvider = (props) => {

    let [yourCorrectAnswers, setYourCorrectAnswers] = useState(0)
    const [show, setShow] = useState('block') //display value of results-page div
    const [results, setResults] = useState(false); //shows you your results after the last question
    const [createQuiz, setCreateQuiz] = useState(false); //if you choose to create your own questions, it becomes true
    const [displayValue, setDisplayValue] = useState('block') //sets display value of the modal window
    const [display, setDisplay] = useState('none') //shows warning if no option is selected
    const [yourQuestions, setYourQuestion] = useState([
        {
            id: 1,
            question: 'question',
            answer_a: '1',
            answer_b: '2',
            answer_c: '3',
            answer_d: '4',
            correct_answer: ''
        },
    ])

      const [existingQuestions, setExistingQuestions] = useState([
        {
          id: 1,
          question: 'What is the difference between React JS and Angular?',
          answer_a: "They are both JS libraries for client-side development",
          answer_b: "Angular is a complete framework while React is a JavaScript Library",
          answer_c: "Angular uses TypeScript, but React JS is a php library",
          answer_d: "They are both backend frameworks, React JS having more functionalities",
          correct_answer: 'Angular is a complete framework while React is a JavaScript Library'
        },
      
        {
          id: 2,
          question: 'Which statement is a fact?',
          answer_a: "React JS was developed by 3 Malaysian students after their graduation",
          answer_b: "You cannot create your own hooks in React JS",
          answer_c: "Vue JS is maintained by IBM and Google",
          answer_d: "jQuery is a JS library",
          correct_answer: 'jQuery is a JS library'
        },
      
        {
          id: 3,
          question: 'Which one below is not a hook?',
          answer_a: "useYourBrain()",
          answer_b: "useMemo()",
          answer_c: "useEffect()",
          answer_d: "useState()",
          correct_answer: 'useYourBrain()'
        },
        {
          id: 4,
          question: 'What statement about Node JS is false?',
          answer_a: "Angular JS is a front-end framework",
          answer_b: "Node JS is a deprecated version of Laravel framework",
          answer_c: "Node JS runs on the server side.",
          answer_d: "Node JS is a back-end JavaScript framework",
          correct_answer: 'Node JS is a deprecated version of Laravel framework'
        },
        {
          id: 5,
          question: 'Which statement is true regarding hooks?',
          answer_a: "Classes enable using local state without writing a hook",
          answer_b: "Hooks help increase code complexity",
          answer_c: "Complex class components are very hard to read and test.",
          answer_d: "Hooks enable using local state without writing a class",
          correct_answer: 'Hooks enable using local state without writing a class'
        },
        {
          id: 6,
          question: 'Which lifecycle method is required?',
          answer_a: "render()",
          answer_b: "componentDidNotMount()",
          answer_c: "componentShouldMount()",
          answer_d: "renderToClass()",
          correct_answer: 'render()'
        },
        {
          id: 7,
          question: 'Which is the correct sequence of lifecycle events?',
          answer_a: "Unmounting --> Mounting --> Updating",
          answer_b: "Mounting --> Initialisation --> Unmounting",
          answer_c: "Mounting --> Updating --> Unmounting",
          answer_d: "Mounting --> Rendering --> Initialisation",
          correct_answer: "Mounting --> Updating --> Unmounting"
        },
      ])

    return (
        <QuizContext.Provider value={{createQuiz, setCreateQuiz, yourQuestions, setYourQuestion, 
                                      existingQuestions, setExistingQuestions, displayValue, setDisplayValue,
                                      results, setResults, yourCorrectAnswers, setYourCorrectAnswers,
                                      show, setShow, display, setDisplay}}> 
            {props.children}
        </QuizContext.Provider>
    )
}

