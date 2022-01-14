function greatestDivisor(num1, num2){
    let divisor = 0;
    let min = Math.min(num1, num2);

    for (let i = 1; i <= min; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            divisor = i;
        }
    }
    
    return divisor;
}

console.log(greatestDivisor(2154, 458));
console.log(greatestDivisor(15, 5));