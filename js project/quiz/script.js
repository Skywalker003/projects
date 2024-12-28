const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const mian = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    mian.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    mian.classList.remove('active')
}