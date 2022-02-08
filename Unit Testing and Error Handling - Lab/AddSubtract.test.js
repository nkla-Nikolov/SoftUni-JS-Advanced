const createCalculator = require('./AddSubtract');
const assert = require('assert').strict;

it('Calculator should have Add method', () => {
    let currentCalc = createCalculator();

    assert.equal(createCalculator().add(), currentCalc.add());
});

it('Calculator should have Subtract method', () => {
    let currentCalc = createCalculator();

    assert.equal(createCalculator().subtract(), currentCalc.subtract());
});

it('Calculator should have Get method', () => {
    let currentCalc = createCalculator();

    assert.equal(createCalculator().get(), currentCalc.get());
});

it('Add method should parse a number as string correctly', () => {
    let expected = 3;
    let calc = createCalculator();
    calc.add('3');

    assert.equal(calc.get(), expected);
});

it('Subtract method should parse a number as string correctly', () => {
    let expected = 5;
    let calc = createCalculator();
    calc.add(10);
    calc.subtract('5');

    assert.equal(calc.get(), expected);
});

it('Get method should return correct final sum', () => {
    let expected = 100;
    let calc = createCalculator();
    calc.add('100');
    calc.add(200);
    calc.subtract('100');
    calc.subtract(100);

    assert.equal(calc.get(), expected);
});