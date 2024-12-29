import { questions } from './quiz';

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
const scoreE1 = document.querySelector('.score');
const footerE1 = document.querySelector('.qus-no')


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
    questionE1.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    optionsE1.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectOption(index);
        optionsE1.appendChild(optionBtn);
    });

    nextBtn.disabled = true;
    footerE1.textContent = `${currentQuestionIndex + 1} of ${questions.length} Questions`;
}

//to handle opt

function selectOption(selectedIndex){
    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');

    optionButtons.forEach((btn, index) => {
        if(index === currentQuestion.correct){
            btn.classList.add('correct');
        }
        if(index === selectedIndex && index !== currentQuestion.correct){
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
    });

    if (selectedIndex === currentQuestion.correct){
        score++;
        scoreE1.textContent = `Score: ${score}`;
    }
    nextBtn.disabled = false;
}

//to handle next btn
nextBtn.onclick = () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        loadQuestion();
    }
    else{
        showResults();
    }
};

function showResults(){
    questionE1.textContent = 'Quiz Completed!';
    optionsE1.innerHTML = `<p>Your final score is ${score} out of ${questions.length}.</p>`;
    nextBtn.style.display = 'none';
}

//starting quiz

loadQuestion();