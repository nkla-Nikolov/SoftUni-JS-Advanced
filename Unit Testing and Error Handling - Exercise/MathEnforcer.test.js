const mathEnforcer = require('./MathEnforcer');
const assert = require('assert').strict;

it('AddFive method should return undefined when parameter is not a number', () => {
    assert.equal(mathEnforcer.addFive('string'), undefined);
    assert.equal(mathEnforcer.addFive([2]), undefined);
});

it('AddFive method should NOT return undefined', () => {
    assert.notEqual(mathEnforcer.addFive(10), undefined);
    assert.notEqual(mathEnforcer.addFive(100), undefined);
});

it('addFive method should return the number + 5 correctly', () => {
    assert.equal(mathEnforcer.addFive(5), 10);
    assert.equal(mathEnforcer.addFive(100.5), 105.5);
    assert.equal(mathEnforcer.addFive(6.5), 11.5);
    assert.equal(mathEnforcer.addFive(0), 5);
    assert.equal(mathEnforcer.addFive(-5), 0);
});

it('subtractTen method should return undefined when parameter is not a number', () => {
    assert.equal(mathEnforcer.subtractTen('string'), undefined);
    assert.equal(mathEnforcer.subtractTen([2]), undefined);
});

it('subtractTen method should NOT return undefined', () => {
    assert.notEqual(mathEnforcer.subtractTen(10), undefined);
    assert.notEqual(mathEnforcer.subtractTen(100), undefined);
});

it('subtractTen method should return the number - 10 correctly', () => {
    assert.equal(mathEnforcer.subtractTen(-10), -20);
    assert.equal(mathEnforcer.subtractTen(0), -10);
    assert.equal(mathEnforcer.subtractTen(20), 10);
    assert.equal(mathEnforcer.subtractTen(100), 90);
    assert.equal(mathEnforcer.subtractTen(15.5), 5.5);
});

it('sum method should return undefined when first parameter is not a number', () => {
    assert.equal(mathEnforcer.sum('text', 10), undefined);
    assert.equal(mathEnforcer.sum('10', 10), undefined);
    assert.equal(mathEnforcer.sum([2, 3], 3), undefined);
    assert.equal(mathEnforcer.sum(['2', '3'], 5), undefined);
});

it('sum method should return undefined when second parameter is not a number', () => {
    assert.equal(mathEnforcer.sum(5, '5'), undefined);
    assert.equal(mathEnforcer.sum(10, 'text'), undefined);
    assert.equal(mathEnforcer.sum(15, ['20']), undefined);
});

it('sum method should work correctly', () => {
    assert.equal(mathEnforcer.sum(5, 5), 10);
    assert.equal(mathEnforcer.sum(20, 20), 40);
    assert.equal(mathEnforcer.sum(0, 0), 0);
    assert.equal(mathEnforcer.sum(-10, -10), -20);
    assert.equal(mathEnforcer.sum(0.5, 10.5), 11);
});