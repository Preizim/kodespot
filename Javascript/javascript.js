function calculate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Division by zero error';
        default:
            return 'Invalid operator';
    }
}

// Example usage:
console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(5, 3, '-')); // Output: 2



function calculateArray(numbers, operators) {
    if (numbers.length - 1 !== operators.length) {
        return "Invalid input";
    }

    let result = numbers[0];
    
    for (let i = 0; i < operators.length; i++) {
        switch(operators[i]) {
            case '+':
                result += numbers[i + 1];
                break;
            case '-':
                result -= numbers[i + 1];
                break;
            case '*':
                result *= numbers[i + 1];
                break;
            case '/':
                result = numbers[i + 1] !== 0 ? result / numbers[i + 1] : 'Division by zero error';
                break;
            default:
                return 'Invalid operator';
        }
    }
    
    return typeof result === 'number' ? result.toFixed(2) : result;
}

// Example usage:
console.log(calculateArray([10, 5, 2], ['+', '*'])); // Output: 30.00
console.log(calculateArray([100, 50, 2], ['/', '-'])); // Output: 0.00
