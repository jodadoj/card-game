//diamonds (♦), clubs (♣), hearts (♥) and spades (♠)

const differentSuits: string[] = ['♥', '♦', '♣', '♠'];
const differentValues: {
  face: { [face: string]: number[] }[];
  number: number[][];
} = {
  face: [
    { King: [10, 14] },
    { Queen: [10, 13] },
    { Jack: [10, 12] },
    { Ace: [1, 11] }
  ],
  // face : ['King', 'Queen', 'Jack', 'Ace'],
  number: [[10], [9], [8], [7], [6], [5], [4], [3], [2]]
};

class Deck {
  public cards: Card[];

  public constructor(cards = createDeckArray()) {
    this.cards = cards;
  }

  get deckSize(): number {
    return this.cards.length;
  }

  public shuffle() {
    for (let cardSlot = this.deckSize - 1; cardSlot > 0; cardSlot--) {
      const newSlot = Math.floor(Math.random() * cardSlot + 1);
      const oldSlot = this.cards[newSlot];
      this.cards[newSlot] = this.cards[cardSlot];
      this.cards[cardSlot] = oldSlot;
    }
  }
}

class Card {
  public suit: string;
  public value: { [face: string]: number[] } | number[];

  public constructor(
    suit: string,
    value: { [face: string]: number[] } | number[]
  ) {
    this.suit = suit;
    this.value = value;
  }
}

/*
createDeckObject():function

returns a full list of cards in a 52 card deck when called as an object

values will have the form of objects with {suit: value}

to start map through suits
create a key in the form of {[suit: string]: number|string}

so every suit needs to have a map through
*/

export function createDeckArray() {
  return differentSuits.flatMap((suit) => {
    return Object.values(differentValues).flatMap((key) => {
      return key.map((value) => {
        return new Card(suit, value);
      });
    });
  });
}

/*
Notes on new features

Implemenmt better shuffle => have to be better algorithms out there for more comprehensive shugffle mechanics
Need cards ids for rigging the shuffle (choosing spefic cards out of the deck)
*/

export default Deck;
