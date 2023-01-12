import {
  Card,
  createDeckArray,
  createMarkedDeck,
  idCard,
  shuffleDeck
} from './deck';
import { it, describe, expect, expectTypeOf } from 'vitest';

const differentSuits: string[] = ['♥', '♦', '♣', '♠'];
const differentValues: {
  face: { [name: string]: number | number[] }[];
  number: number[];
} = {
  face: [{ King: 14 }, { Queen: 13 }, { Jack: 12 }, { Ace: [1, 11] }],
  // face : ['King', 'Queen', 'Jack', 'Ace'],
  number: [2, 3, 4, 5, 6, 7, 8, 9, 10]
};

describe('What object is created by createDeck?', () => {
  it('logs the values of differentSuits to the console', () => {
    console.log(Object.values(differentSuits));
    expect(1).toBe(1);
  });

  it('logs the values of differentValues to the console', () => {
    console.log(Object.values(differentValues));
    expect(1).toBe(1);
  });

  it('checks the cards produced by createDeckObject are put into an array/object', () => {
    const createdDeck: Card[] = createDeckArray();
    console.table(createdDeck);
    const createdDeckSize: number = createdDeck.length;
    expect(createdDeckSize).toBe(52);
    expectTypeOf(createDeckArray()).toEqualTypeOf<object>;
  });

  it('ids the deck', () => {
    console.table(createMarkedDeck);
    expectTypeOf(createMarkedDeck).toEqualTypeOf<object>;
  });

  it('shuffles the deck', () => {
    const shuffledDeck: idCard[] = shuffleDeck(createMarkedDeck());
    console.table(shuffledDeck);
    const shuffledDeckSize = shuffledDeck.length;
    console.table('the shuffled deck contains ' + shuffledDeckSize + ' cards');
    expect(shuffledDeckSize).toBe(52);
    expectTypeOf(shuffledDeck).toEqualTypeOf<object>;
  });
});
