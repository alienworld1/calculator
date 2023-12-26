add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a/b;

let firstNumber;
let operator;
let lastNumber;

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
