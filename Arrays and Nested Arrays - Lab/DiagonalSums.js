function solve(matrix){
    let sumPrimaryDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumPrimaryDiagonal += matrix[i][i];
        sumSecondaryDiagonal += matrix[i][matrix.length - i - 1];
    }

    console.log(sumPrimaryDiagonal + ' ' + sumSecondaryDiagonal);
}

solve([[20, 40],
      [10, 60]]);

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);

