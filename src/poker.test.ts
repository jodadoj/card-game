import { checkHand } from './Poker';
import { it, describe, expect } from 'vitest';
import { IdCard } from './deck';

describe('Check the value of a single hand?', () => {
  it('logs the values of the hand to the console', () => {
    const randomHand: IdCard[] = [];
    // for (const i of [0, 1, 2, 3, 4]) {
    //   randomHand.push(createShuffledIdDeck().pop() as IdCard);
    // }
    console.table(randomHand);
    console.table(checkHand(randomHand));
    expect(1).toBe(1);
  });
});
