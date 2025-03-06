const countDownElement = document.getElementById('countdown');
const formElement = document.getElementById('answers-form');
const messageElement = document.getElementById('message');
const listElement = document.getElementById('numbers-list');
let count = 10;

const countdown = setInterval(() => {
    countDownElement.innerText = count;
    count--;
    if (count === -1) {
        clearInterval(countdown);
        formElement.classList.remove('d-none');
    }
}, 1000);

