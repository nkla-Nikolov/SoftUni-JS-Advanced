function Operations(num1, num2, operation){
    if(operation == '+'){
        console.log(num1 + num2);
    }
    else if(operation == '-'){
        console.log(num1 - num2);
    }
    else if(operation == '*'){
        console.log(num1 * num2);
    }
    else if(operation == '/'){
        console.log(num1 / num2);
    }
    else if(operation == '%'){
        console.log(num1 % num2);
    }
    else if(operation == '**'){
        console.log(Math.pow(num1, num2));
    }
}

Operations(3, 5.5, '*')