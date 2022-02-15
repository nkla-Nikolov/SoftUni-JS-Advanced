const library = require('./library');
const { expect } = require('chai');

describe("Tests …", function () {
    describe("calcPriceMethod Tests", function () {
        it('constructor should throw error if input values are wrong', function () {
            expect(() => library.calcPriceOfBook(299)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(['name'], 200)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(5, 'name')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, -5)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('name', NaN)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, {})).to.throw('Invalid input');
        });

        it('The initial price for a book must be 20.00', () => {
            let expected = 'Price of name is 20.00'

            expect(library.calcPriceOfBook('name', 2000)).to.equal(expected);
            expect(library.calcPriceOfBook('name', 1981)).to.equal(expected);
            expect(library.calcPriceOfBook('name', 1988)).to.equal(expected);
            expect(library.calcPriceOfBook('name', 2500)).to.equal(expected);
        });

        it('If year is <= 1980 price should be discounted with 10%', () => {
            let expected = 'Price of book is 10.00'

            expect(library.calcPriceOfBook('book', 1980)).is.equal(expected);
            expect(library.calcPriceOfBook('book', 500)).is.equal(expected);
            expect(library.calcPriceOfBook('book', 1979)).is.equal(expected);
        });
    });

    describe('findBook Tests', () => {
        it('The method should throw error if array is empty', () => {
            let expected = "No books currently available";

            expect(() => library.findBook([], 'name')).throw(Error, expected);
            expect(() => library.findBook([], 'book')).throw(expected);
        });

        it('if the book is found', () => {
            let expected = "We found the book you want.";

            expect(library.findBook(['name'], 'name')).is.equal(expected);
            expect(library.findBook(['a', 'b', 'c'], 'c')).is.equal(expected);
            expect(library.findBook(['q'], 'q')).is.equal(expected);
        });

        it('If the book is not found', () => {
            let expected = "The book you are looking for is not here!";

            expect(library.findBook(['a', 'b', 'c'], 'd')).is.equal(expected);
            expect(library.findBook(['desiredBook'], 'book')).is.equal(expected);
            expect(library.findBook(['name', 'Troy'], 'Sparta')).is.equal(expected);
            expect(library.findBook(['name'], 'namee')).is.equal(expected);
        });
    });

    describe('arrangeBook Tests', () => {
        it('Input type should throw error if != number', () => {
            expect(() => library.arrangeTheBooks('string')).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks('1')).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(NaN)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-22.47)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(false)).to.throw('Invalid input');
        });

        it('Should work if availableSpace is more than the count of books', () => {
            let expected = "Great job, the books are arranged.";

            expect(library.arrangeTheBooks(39)).is.equal(expected);
            expect(library.arrangeTheBooks(30)).is.equal(expected);
            expect(library.arrangeTheBooks(15)).is.equal(expected);
            expect(library.arrangeTheBooks(2)).is.equal(expected);
        });

        it('Should not work if available space is less than countBooks', () => {
            let expected = "Insufficient space, more shelves need to be purchased.";

            expect(library.arrangeTheBooks(42)).to.equal(expected);
            expect(library.arrangeTheBooks(45)).to.equal(expected);
            expect(library.arrangeTheBooks(41)).to.equal(expected);
            expect(library.arrangeTheBooks(120)).to.equal(expected);
            expect(library.arrangeTheBooks(200)).to.equal(expected);
        });
    });

});
