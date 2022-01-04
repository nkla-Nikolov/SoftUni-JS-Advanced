function Aggregate(input){
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    input.forEach(element => {
        sum += element;
        inverseSum += 1 / element;
        concat += element;
    });

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

Aggregate([1, 2, 3])