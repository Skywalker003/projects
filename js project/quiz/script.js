import {questions} from './questions'

const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSelection = document.querySelector('.quiz-selection');
//quiz part
const questionE1 = document.querySelector('.question');
const optionsE1 = document.querySelector('.options');
const nextBtn = document.querySelector('.next-btn');
const scoreE1 = document.getElementById('.score');
const footerE1 = document.getElementById('.qus-no')


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active')
}

continueBtn.onclick = () => {
    quizSelection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active')
}

//quiz part

//quiz state 
let currentQuestionIndex = 0;
let score = 0;

//loading qus

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
}