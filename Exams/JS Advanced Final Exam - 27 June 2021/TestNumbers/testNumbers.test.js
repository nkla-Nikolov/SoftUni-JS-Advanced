const {expect} = require('chai');
const testNumbers = require('./testNumbers');

describe('sumNumber method tests', () => {
    it('Parameters should be undefined if are not numbers', () => {
        expect(testNumbers.sumNumbers('2', '4')).to.equal(undefined);
        expect(testNumbers.sumNumbers([2, 3], [4,6])).to.equal(undefined);
        expect(testNumbers.sumNumbers(NaN, {})).to.equal(undefined);
        expect(testNumbers.sumNumbers('string', NaN)).to.equal(undefined);
        expect(testNumbers.sumNumbers(undefined, undefined)).to.equal(undefined);
        expect(testNumbers.sumNumbers(2, '3')).to.be.undefined;
    });

    it('Should work correctly with negative and positive numbers', () => {
        
        expect(testNumbers.sumNumbers(5, 10)).to.equal(Number(15).toFixed(2));
        expect(testNumbers.sumNumbers(-5, -10)).to.equal(Number(-15).toFixed(2));
        expect(testNumbers.sumNumbers(5.5, 5.5)).to.equal(Number(11).toFixed(2));
        expect(testNumbers.sumNumbers(-100, 100)).to.equal(Number(0).toFixed(2));
    });
});

describe('numberChecker tests', () => {
    it('Method should throw error if input is not a number', () => {
        expect(() => testNumbers.numberChecker(undefined)).to.throw(Error, 'The input is not a number!');
        expect(() => testNumbers.numberChecker(NaN)).to.throw('The input is not a number!');
        expect(() => testNumbers.numberChecker([2, 3])).to.throw('The input is not a number!');
        expect(() => testNumbers.numberChecker('string')).to.throw(Error);
    });

    it('Should parse the input into number and display the correct messages', () => {
        let even = 'The number is even!';
        let odd = 'The number is odd!';

        expect(testNumbers.numberChecker('3')).to.equal(odd);
        expect(testNumbers.numberChecker('6')).to.equal(even);
        expect(testNumbers.numberChecker(7)).to.equal(odd);
        expect(testNumbers.numberChecker(10)).to.equal(even);
        expect(testNumbers.numberChecker(-5)).to.equal(odd);
        expect(testNumbers.numberChecker('-5')).to.equal(odd);
        expect(testNumbers.numberChecker(6.4)).to.equal(odd);
    });
});

describe('averageSumArray tests', () => {
    it('Should calculate correctly the average sum of the array', () => {
        expect(testNumbers.averageSumArray([1, 2, 3, 4, 5])).to.equal([1, 2, 3, 4, 5].reduce((a, x) => a + x, 0) / 5);
        expect(testNumbers.averageSumArray([-2, -3])).to.equal(-5 / 2);
        expect(testNumbers.averageSumArray([5.5, 5.5])).to.equal(11 / 2);
    });
});