function calculate(inputValue) {
    const expression = /\+|\-|\*|\//;
    const numbers = inputValue.split(expression);

    const numberA = parseInt(numbers[0]);

    const numberB = parseInt(numbers[1]);

    const operation = inputValue.match(expression);

    if (Number.isNaN(numberA) || Number.isNaN(numberB)||operation === null) {
        update('Not working')
        return;
    }
    const calculator = new Calculator();

    calculator.add(numberA);

    let result;

    switch(operation[0]) {
        case '+':
            result = calculator.add(numberB);
        break;
        case '-':
            result = calculator.subtract(numberB);
        break;
        case '*':
            result = calculator.multiply(numberB);
        break;
        case '/':
            result = calculator.divide(numberB);
        break;
    }
    update(result);
}

function update(result){
    const element = document.getElementById('result-content');

    if (element) {
        element.innerText = result;
    }
}
