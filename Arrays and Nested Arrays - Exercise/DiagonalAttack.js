function solve(input){

    function printFinal(matrix){
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
    
    let matrix = [,];

    for (let i = 0; i < input.length; i++) {
        matrix[i] = [];

        input[i].split(' ').map(x=> Number(x)).forEach(x => matrix[i].push(x));
    }

    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];
        rightDiagonalSum += matrix[i][matrix[i].length - 1 - i];
    }

    if (leftDiagonalSum != rightDiagonalSum) {
        printFinal(matrix);
    }
    else{
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i == matrix.length - 1 - j || i == j) {
                    continue;
                }

                matrix[i][j] = leftDiagonalSum;
            }
        }
        printFinal(matrix);
    }
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

solve(['1 1 1','1 1 1','1 1 0']);
