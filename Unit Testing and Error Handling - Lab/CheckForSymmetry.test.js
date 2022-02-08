const isSymmetric = require('./CheckForSymmetry');
const assert = require('assert').strict;

describe('Tests for isSymmetric problem', () => {
    it('Input must be invalid with invalid values', () => {
        assert.equal(isSymmetric(NaN), false);
        assert.equal(isSymmetric(undefined), false);
        assert.equal(isSymmetric('some string'), false);
    });

    it('Array should be symmetric with number values', () => {
        assert.equal(isSymmetric([10, 20, 10]), true);
    });

    it('Array should not be symmetric with number values', () => {
        assert.equal(isSymmetric([10, 20, 30, 20]), false);
    });

    it('Array should be symmetric with string values', () => {
        assert.equal(isSymmetric(['a', 'b', 'a']), true);
    });

    it('Array should not be symmetric with string values', () => {
        assert.equal(isSymmetric(['a', 'b', 'b']), false);
    });

    it('should not be symmetric with 2 different types of values', () => {
        let array = ['1', 2, 1];

        assert.equal(isSymmetric(array), false);
    });
});