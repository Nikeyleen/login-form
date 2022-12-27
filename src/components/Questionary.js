import React, {useState} from 'react';

    export default function App(){

        const question = [
{
    questionText:'What is the capital of France',
    answerOption:[
        {answer: 'New York', isCorrect: false},
        {answer: 'London', isCorrect: false},
        {answer: 'Paris', isCorrect: true},
        {answer: 'Dublin', isCorrect: false},
    ],       
},
{
    QusetionText:'Who is CEO of Tesla',
    answerOption:[
            {answer: 'Jess Bof', isCorrect: false},
            {answer: 'Me', isCorrect: true},
            {answer: 'Bear', isCorrect: false},
            {answer: 'Tony Stark', isCorrect: false},
        ],
    },   
{
    QusetionText:'How in Danish will be "sorry"?',
    answerOption:[
            {answer: 'przepraszam', isCorrect: false},
            {answer: 'Undskul', isCorrect: true},
            {answer: 'apolodziaze', isCorrect: false},
            {answer: 'My bed', isCorrect: false},
        ],  
},
]
}
                
//     <div className="question-section">
//         <div className="question-count">
//             <span>Question 1</span>/{question.length}
//         </div>
//  </div>
//         <div className="question-text">{question[0].question.length}
// </div>
// <div className="answer-section">

// </div>
