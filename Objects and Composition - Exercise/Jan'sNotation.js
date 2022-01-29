function solve(input){
    let numbers = [];
    let operators = [];

    for (let i = 0; i < input.length; i++) {
        if(Number.isInteger(input[i])){
            numbers.push(input[i]);
        }
        else{ 
            operators.push(input[i]);

            if(numbers.length > 1){
                const operator = operators.pop();
                const secondNumber = numbers.pop();
                const firstNumber = numbers.pop();

                if(operator === '+'){
                    numbers.push(firstNumber + secondNumber);
                }
                else if(operator === '-'){
                    numbers.push(firstNumber - secondNumber);
                }
                else if(operator === '*'){
                    numbers.push(firstNumber * secondNumber)
                }
                else if(operator === '/'){
                    numbers.push(firstNumber / secondNumber);
                }
            }
        }
    }

    if(numbers.length >= 2 && operators.length === 0){
        console.log('Error: too many operands!');
        return;
    }
    if(numbers.length < 2 && operators.length >= 1){
        console.log('Error: not enough operands!');
        return;
    }

    console.log(numbers[0]);
}

solve([7, 33, 8, '-']);
