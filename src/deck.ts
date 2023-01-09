//diamonds (♦), clubs (♣), hearts (♥) and spades (♠)

const differentSuits: string[] = ['♥', '♦', '♣', '♠'];
const differentValues: {
  face: { [face: string]: number[] }[];
  number: number[];
} = {
  face: [{ King: [10, 14] }, { Queen: [10, 13] }, { Jack: [10, 12] }, { Ace: [1, 11] }],
  // face : ['King', 'Queen', 'Jack', 'Ace'],
  number: [10, 9, 8, 7, 6, 5, 4, 3, 2]
};

class Deck {
  public cards: object;

  public constructor(cards: object) {
    this.cards = cards;
  }
}

class Card {
  public suit: string;
  public value: { [face: string]: number | number[] } | number;

  public constructor(
    suit: string,
    value: { [face: string]: number | number[] } | number
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

export function createDeckObject() {
  return differentSuits.flatMap((suit) => {
    return Object.values(differentValues).flatMap((key) => {
      return key.map((value) => {
        return new Card(suit, value);
      });
    });
  });
}

export default Deck;
