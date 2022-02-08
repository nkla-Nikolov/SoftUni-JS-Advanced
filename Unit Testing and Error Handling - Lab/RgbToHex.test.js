const rgbToHexColor = require('./RgbToHex');
const assert = require('assert').strict;

it('Red color should be in range 0-255', () => {
    assert.notEqual(rgbToHexColor(0, 0, 0), undefined);
    assert.notEqual(rgbToHexColor(255, 0, 0), undefined);
});

it('Red color should be undifined if parameters are out of range', () => {
    assert.equal(rgbToHexColor(256, 0, 0), undefined);
    assert.equal(rgbToHexColor(-1, 0, 0), undefined);
});

it('Red color should be undifined if the input is not an integer', () => {
    assert.equal(rgbToHexColor('b', 5, 5), undefined);
    assert.equal(rgbToHexColor(' ', 100, 100), undefined);
});

it('Green color should be in range 0-255', () => {
    assert.notEqual(rgbToHexColor(10, 0, 0), undefined);
    assert.notEqual(rgbToHexColor(0, 255, 50), undefined);
});

it('Green color should be undifined if parameters are out of range', () => {
    assert.equal(rgbToHexColor(0, 256, 0), undefined);
    assert.equal(rgbToHexColor(0, -1, 0), undefined);
});

it('Green color should be undifined if input is not an integer', () => {
    assert.equal(rgbToHexColor(5, 'z', 10), undefined);
    assert.equal(rgbToHexColor(100, ' ', 100), undefined);
});

it('Blue color should be in range 0-255', () => {
    assert.notEqual(rgbToHexColor(0, 0, 0), undefined);
    assert.notEqual(rgbToHexColor(150, 250, 255), undefined);
});

it('Blue color should be undifined if parameters are out of range', () => {
    assert.equal(rgbToHexColor(0, 0, 256), undefined);
    assert.equal(rgbToHexColor(0, 0, -1), undefined);
});

it('Blue color should be undifined if input is not an integer', () => {
    assert.equal(rgbToHexColor(10, 10, 'm'), undefined);
    assert.equal(rgbToHexColor(100, 200, ''), undefined);
});

it('Should return expected hex color TEST#1', () => {
    let expectedResult = '#64C8F9';

    assert.equal(rgbToHexColor(100, 200, 249), expectedResult);
});

it('Should return expected hex color TEST#2', () => {
    let expectedResult = '#4E8FD0';

    assert.equal(rgbToHexColor(78, 143, 208), expectedResult);
});

it('Should return expected hex color TEST#3', () => {
    let expectedResult = '#000000';

    assert.equal(rgbToHexColor(0, 0, 0), expectedResult);
});