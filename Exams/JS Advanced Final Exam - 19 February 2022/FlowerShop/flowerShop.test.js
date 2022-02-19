const { expect } = require('chai');
const flowerShop = require('./flowerShop');

describe("Tests …", function () {
    describe("calcPrice …", function () {
        it("check if flower is a string", function () {
            let expected = 'Invalid input!';

            expect(() => flowerShop.calcPriceOfFlowers(10, 5, 6)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers(['string'], 5, 6)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers([10], 5, 6)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers({}, 5, 6)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers(NaN, 5, 6)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 5, 6)).to.throw(Error, expected);
        });

        it('check if price is a number', () => {
            let expected = `Invalid input`;

            expect(() => flowerShop.calcPriceOfFlowers('rose', 'rose', 10)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', NaN, 10)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', undefined, 10)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', [10], 10)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', {}, 10)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', '100', 10)).to.throw(Error, expected);
        });

        it('check if quantity is a number', () => {
            let expected = `Invalid input`;

            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, NaN)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, undefined)).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, '100')).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, [256])).to.throw(Error, expected);
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, {})).to.throw(Error, expected);
        });

        it('Whole method should work correctly', () => {
            expect(flowerShop.calcPriceOfFlowers('rose', 1, 5)).to.equal(`You need $5.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', 2, 5)).to.equal(`You need $10.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', -1, 5)).to.equal(`You need $-5.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', 0, 0)).to.equal(`You need $0.00 to buy rose!`);
        });
    });

    describe('checkFlowerAvailbale method', () => {
        it('flower should be available', () => {
            let expected = `The rose are available!`;

            expect(flowerShop.checkFlowersAvailable('rose', ['text', 'string', 'rose'])).to.equal(expected);
            expect(flowerShop.checkFlowersAvailable('rose', [undefined, NaN, 'rose'])).to.equal(expected);
            expect(flowerShop.checkFlowersAvailable('rose', [undefined, 'rose', NaN])).to.equal(expected);
        });

        it('flower should be missing in the input array', () => {
            let expected = `The orchid are sold! You need to purchase more!`;

            expect(flowerShop.checkFlowersAvailable('orchid', ['rose', 'secondFlower', 'thirdFlower', NaN, undefined])).to.equal(expected);
            expect(flowerShop.checkFlowersAvailable('orchid', ['rose'])).to.equal(expected);
            expect(flowerShop.checkFlowersAvailable('orchid', [undefined])).to.equal(expected);
        });
    });

    describe('sellFlowers method', () => {
        it('check if array input is array', () => {
            let expected = 'Invalid input!';

            expect(() => flowerShop.sellFlowers('array', 1)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(20, 1)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(undefined, 1)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(NaN, 1)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(1)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers({}, 1)).to.throw(Error, expected);
        });

        it('check if space is a number', () => {
            let expected = 'Invalid input!';

            expect(() => flowerShop.sellFlowers(['orchid'], NaN)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(['orchid'], undefined)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(['orchid'], '10')).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(['orchid'], {})).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(['orchid'], [10])).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(['orchid'], [10, 20])).to.throw(Error, expected);
        });

        it('space is less or more than the array length', () => {
            let expected = 'Invalid input!';

            expect(() => flowerShop.sellFlowers(['rose'], 10)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(['rose', 'orchid'], 3)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(['rose'], -1)).to.throw(Error, expected);
            expect(() => flowerShop.sellFlowers(['rose'], -5)).to.throw(Error, expected);
        });

        it('Should work corretly', () => {

            expect(flowerShop.sellFlowers(['rose', 'orchid', 'lilly'], 2)).to.be.deep.equal('rose / orchid');
        });
    });
});
