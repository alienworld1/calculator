add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a/b;

let firstNumber = 0;
let operator;
let lastNumber;

const arithmeticOperators = "+-*/";
const maxDisplayLength = 10;

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

    return result;
}

const numberButtons = document.querySelectorAll("button.number");
const display = document.querySelector("#display");
const operatorButtons = document.querySelectorAll("button.operator");

function displayValue(value) {
    if (display.textContent === "0") display.textContent = "";
   
    display.textContent += value;
}

function getOperator(event) {
    if (operator) {
        previousButton = document.getElementById(operator);
        previousButton.classList.remove("selected");
    }

    operator = event.currentTarget.id;

    if (arithmeticOperators.includes(operator)) {
        event.currentTarget.classList.add("selected");
    }
}

function storeValue(event) {
    if (display.textContent.length > maxDisplayLength){
        alert("Exceeded max display length");
        return;
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