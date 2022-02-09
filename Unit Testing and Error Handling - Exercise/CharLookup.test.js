const lookupChar = require('./CharLookup');
const assert = require('assert').strict;

it('Should return undefined if the first parameter is not string', () => {
    assert.equal(lookupChar(10, 10), undefined);
    assert.equal(lookupChar(['some string'], 5), undefined);
    assert.equal(lookupChar(NaN, 5), undefined);
});

it('Should NOT return undefined if first parameter is a string', () => {
    assert.notEqual(lookupChar('string', 2), undefined);
    assert.notEqual(lookupChar('some text here', 7), undefined);
});

it('Should return undefined if second parameter is not a number', () => {
    assert.equal(lookupChar('text', 'text'), undefined);
    assert.equal(lookupChar('text', NaN), undefined);
    assert.equal(lookupChar('text', [2, 3, 4, 5]), undefined);
});

it('Should NOT return undefined if second parameter is a number', () => {
    assert.notEqual(lookupChar('text', 5), undefined);
    assert.notEqual(lookupChar('text', 2504525), undefined);
});

it('If input index is bigger than string length should return exception message', () => {
    let expected = "Incorrect index";

    assert.equal(lookupChar('text', 4), expected);
});

it('If input index is less than zero', () => {
    let expected = "Incorrect index";

    assert.equal(lookupChar('text', -1), expected);
});

it('Should return correct values TEST#1', () => {
    let expected = 'x';

    assert.equal(lookupChar('text', 2), expected);
});

it('Should return correct values TEST#2', () => {
    let expected = 'b';

    assert.equal(lookupChar('bomb', 0), expected);
    assert.equal(lookupChar('bomb', 3), expected);
});