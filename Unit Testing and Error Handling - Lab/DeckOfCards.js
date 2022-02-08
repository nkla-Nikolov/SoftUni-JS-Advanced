function printDeckOfCards(inputCards) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (!(validFaces.includes(face) && Object.keys(validSuits).includes(suit))) {
            throw Error(`Invalid card: ${face + suit}`);
        }

        let cardObject = {
            face,
            suit: validSuits[suit],
            toString: function () {
                return this.face + this.suit;
            }
        }

        return cardObject;
    }

    let cards = [];

    try {
        for (const card of inputCards) {
            let face = card.substring(0, card.length - 1)
            let suit = card.substring(card.length - 1);
            cards.push(createCard(face, suit));
        }

        console.log(cards.map(x => x.toString()).join(' '));
    }
    catch (error) {
        console.log(error.message);
    }
}