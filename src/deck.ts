//diamonds (♦), clubs (♣), hearts (♥) and spades (♠)

const differentSuits: string[] = ['♥', '♦', '♣', '♠'];
const differentValues: {
  face: { [name: string]: number | number[] }[];
  number: number[];
} = {
  face: [{ King: 14 }, { Queen: 13 }, { Jack: 12 }, { Ace: [1, 11] }],
  // face : ['King', 'Queen', 'Jack', 'Ace'],
  number: [2, 3, 4, 5, 6, 7, 8, 9, 10]
};

class Deck {
  public cards: object;

  public constructor(cards: object) {
    this.cards = cards;
  }
}

class Card {
  public suit: string;
  public value: string | number;

  public constructor(suit: string, value: string | number) {
    this.suit = suit;
    this.value = value;
  }
}

export function createDeckObject() {
  return differentSuits.flatMap((suit) => {
    return differentValues.map;
  });
}

export default Deck;
