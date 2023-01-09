import { createDeckObject } from './deck';
import { it, describe, expect } from 'vitest';

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
  it('logs the values of differentValues to the console', () => {
    console.log(Object.values(differentValues));
    expect(1).toBe(1);
  });

  it('logs the cards produced by createDeckObject', () => {
    console.log(createDeckObject());
  });
  // console.log(createDeckObject());
});
