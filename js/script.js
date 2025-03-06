const countDownElement = document.getElementById('countdown');
const formElement = document.getElementById('answers-form');
const messageElement = document.getElementById('message');
const listElement = document.getElementById('numbers-list');
const inputElement = document.querySelectorAll('.form-control');

const numbers = [];
const correctNumbers = [];

// Create and show element in page
const listNumbers = document.createDocumentFragment();
function createListNumbers() {
    makeNumbers().forEach(e => {
        let liElement = document.createElement('li');
        liElement.append(e);
        listNumbers.appendChild(liElement);

    });
    listElement.appendChild(listNumbers);
}

createListNumbers();

// CountDown
let count = 30;
const countdown = setInterval(() => {
    countDownElement.innerText = count;
    count--;
    if (count === -1) {
        clearInterval(countdown);
        formElement.classList.remove('d-none');
        listElement.classList.add('d-none');
    }
}, 1000);

// Prevent submit form
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputUser();
});

// Check input user and disable input if correct
function checkInputUser() {
    inputElement.forEach(e => {
        if (numbers.includes(Number(e.value))) {
            e.disabled = true;
            if (!correctNumbers.includes(e.value)) {
                correctNumbers.push(e.value);
            }
        };
        messageElement.innerText = `Numeri indovinati (${correctNumbers.join(", ")})`;
    }
    );
}

// Generate 5 numbers random
function makeNumbers() {
    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(1, 50));
    }
    return numbers;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}