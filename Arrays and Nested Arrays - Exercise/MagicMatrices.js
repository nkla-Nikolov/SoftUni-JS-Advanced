function magical(matrix){
    let desiredSum = matrix[0].reduce((x, y) => x += y, 0);
    let sumRow = 0;
    let sumCol = 0;

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            sumRow += matrix[i][j];
            sumCol += matrix[j][i];
        }
        
        if ((sumRow || sumCol) != desiredSum) {
            return false;
        }

        sumRow = 0;
        sumCol = 0;
    }

    return true; 
}

console.log(magical([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magical([[11, 32, 45],[21, 0, 1],[21, 1, 1]]));
console.log(magical([[1, 0, 0],[0, 0, 1],[0, 1, 0]]));
