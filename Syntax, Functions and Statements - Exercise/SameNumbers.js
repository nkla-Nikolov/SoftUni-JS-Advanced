function checkDigits(num){
    let numberAsString = String(num);
    let areEqual = true;    
    let sum = numberAsString.length > 0 ? Number(numberAsString[0]) : 0;
    
    for (let i = 0; i < numberAsString.length - 1; i++) {
        
        if (numberAsString[i] !== numberAsString[i + 1]) {
            areEqual = false;
        }

        sum += Number(numberAsString[i + 1]);
    }

    if (areEqual === false) {
        console.log('false');
        console.log(sum);
    }
    else{
        console.log('true');
        console.log(sum);
    }
}


checkDigits(2222222)
checkDigits(1234);
