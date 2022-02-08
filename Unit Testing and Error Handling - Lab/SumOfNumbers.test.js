const assert = require('assert').strict;
const sum = require('./SumOfNumbers');

describe('Sum of numbers tests', () => {
    it('Should calculate correctly the total sum', () => {
        let expectedSum = 100;
        let numbers = [10, 20, 30, 40]
        
        let totalSum = sum(numbers);
    
        assert.equal(totalSum, expectedSum);
    });
    
    it('Should return zero', () => {
        let expectedSum = 0;
        let numbers = [0, 0, 0, 0]
        
        let totalSum = sum(numbers);
    
        assert.equal(totalSum, expectedSum);
    });
    
    it('Should calculate correctly with negative values', () => {
        let expectedSum = -15;
        let numbers = [-5, -10]
        
        let totalSum = sum(numbers);
    
        assert.equal(totalSum, expectedSum);
    });
});
