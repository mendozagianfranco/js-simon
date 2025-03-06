const countDownElement = document.getElementById('countdown');
const formElement = document.getElementById('answers-form');
const messageElement = document.getElementById('message');
const listElement = document.getElementById('numbers-list');
const inputElement = document.querySelectorAll('.form-control');
let count = 30;
const numbers = [];
const correctNumbers = [];
const countdown = setInterval(() => {
    countDownElement.innerText = count;
    count--;
    if (count === -1) {
        clearInterval(countdown);
        formElement.classList.remove('d-none');
        listElement.classList.add('d-none');
    }
}, 1000);


formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputUser();
});

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

function makeNumbers() {
    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(1, 50));
    }
    return numbers;
}

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
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}