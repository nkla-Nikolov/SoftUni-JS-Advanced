const assert = require('assert').strict;
const isOddOrEven = require('./EvenOrOdd');

it('Input should work with string', () => {
    assert.notEqual(isOddOrEven('some string'), undefined);
});

it('Input should be undifined with values except string', () => {
    assert.equal(isOddOrEven(['string']), undefined);
    assert.equal(isOddOrEven(29), undefined);
});

it('Output should return odd', () => {
    let expected = 'odd'
    assert.equal(isOddOrEven('odd'), expected);
    assert.equal(isOddOrEven('num'), expected);
});

it('Output should return even', () => {
    let expected = 'even';

    assert.equal(isOddOrEven('even'), expected);
    assert.equal(isOddOrEven('number'), expected);
});