let num1 = 0;
let num2 = 0;
let operator = '';
let secondNum = false;
let ans = 0;
let lastButton = '';

const operatorButtons = document.querySelectorAll(".operator-button");
const numberButtons = document.querySelectorAll(".number-button");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");
const display = document.querySelector('#display');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (secondNum == true || lastButton == "+" || lastButton == "-" || lastButton == "*" || lastButton == "/") {
            secondNum = true;
            parseSecondNum(button.textContent);
        }
        lastButton = button.textContent;
        if (display.textContent == '0') {
            display.textContent = "";
        }
        displayInput(button.textContent)
    })
});

function parseSecondNum(digit) {
    num2 += digit;
    console.log("num2: " + num2);
}

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // doesn't allow multiple operators
        if (lastButton == "+" || lastButton == "-" || lastButton == "*" || lastButton == "/") {
            display.textContent = display.textContent.slice(0, display.textContent.length - 1); // slice last button, aka repeat operator
        }
        operator = button.textContent;
        lastButton = button.textContent;
        displayInput(button.textContent)
        // on press of operator button, any text before it should save to num1
        num1 = Number(display.textContent.slice(0, display.textContent.length - 1));
        console.log("NUM1: " + num1);
    })
});
// event listener for equal button
document.querySelector('#equal-button').addEventListener('click', event => {
    let answer = operate(operator, Number(num1), Number(num2));
    document.querySelector('#display').textContent = answer;

    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log("operator: " + operator);
    num1 = answer;
    num2 = 0;
    operator = "";
})


// document.querySelector('#operator-container').addEventListener('click', event => {
//     let target = event.target;
//     operator = target.textContent;
//     num1 = parseInt(display.textContent);
//     console.log(num1);
//     secondNum = true;
// })

// on clear, make second num false;
document.querySelector('#clear-button').addEventListener('click', event => {
    let target = event.target;
    secondNum = false;
    num1 = 0;
    num2 = 0;
    operator = "";
    document.querySelector('#display').textContent = "";
})

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        alert("nice try!!"); // handle dividing by 0
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}


function displayInput(text) {
    document.querySelector('#display').textContent += text;
    ans = document.querySelector('#display').textContent;
}

clearButton.addEventListener('click', () => clear());

function clear() {
    document.querySelector('#display').textContent = "";
    num1 = 0;
    num2 = 0;
    operator = "";
}