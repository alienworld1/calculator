add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a/b;

let firstNumber;
let operator;
let lastNumber;

const arithmeticOperators = "+-*/";
const maxDisplayLength = 10;

let isFirstNumber = true;

function round(number, decimalPlaces) {
    return Math.round(number * (10 ** decimalPlaces))/(10**decimalPlaces);
}

function operate(operator, number1, number2) {
    let result;

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        
        case "-":
            result = number1 - number2;
            break;
            
        case "*":
            result = number1 * number2;
            break;
        
        case "/":
            //todo: Check if number2 is zero, to avoid division by zero
            result = number1 / number2;
            break;    
    }

    return round(result, maxDisplayLength - 3);
}

const numberButtons = document.querySelectorAll("button.number");
const display = document.querySelector("#display");
const operatorButtons = document.querySelectorAll("button.operator");
const clearButton = document.querySelector("#clear");

function displayValue(value) {
    if (display.textContent === "0") display.textContent = "";
   
    display.textContent += value;
}

function clearSelectedOperator(setNull = false) {
    previousButton = document.getElementById(operator);
    previousButton.classList.remove("selected");
    if (setNull) operator = null;
}

function performEqualsOperation() {
    if (isFirstNumber) return;

    lastNumber = +display.textContent;
    console.log(firstNumber, lastNumber, operator);
    let result = operate(operator, firstNumber, lastNumber);

    firstNumber = result;

    display.textContent = "";
    displayValue(firstNumber);
    isFirstNumber = true;
    clearSelectedOperator(true);
}

function clearDisplay() {
    display.textContent = "";
    displayValue(0);
    isFirstNumber = true;
    clearSelectedOperator(true);
}

function signChangeOperation() {
    let number = +display.textContent * -1;
    display.textContent = "";
    display.textContent = number;
}

function getOperator(event) {
    if (operator) clearSelectedOperator();

    if (event.currentTarget.id === "=") performEqualsOperation();

    if (event.currentTarget.id === "+/-") {
        signChangeOperation();
        return;
    }


    operator = event.currentTarget.id;

    if (arithmeticOperators.includes(operator)) {
        event.currentTarget.classList.add("selected");
    }

    firstNumber = +display.textContent;
}

function storeValue(event) {
    if (display.textContent.length > maxDisplayLength){
        alert("Exceeded max display length");
        return;
    }

    if (operator && isFirstNumber) {
        firstNumber = +display.textContent;
        display.textContent = "";
        displayValue(0);
        clearSelectedOperator();
        isFirstNumber = false;
    }

    if (event.currentTarget.id === ".") {
        if (display.textContent.includes(".")) return;
    }
    
    displayValue(event.currentTarget.id);
}

numberButtons.forEach((button) => {
    button.addEventListener("click", storeValue);
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", getOperator);
});

clearButton.addEventListener("click", clearDisplay);