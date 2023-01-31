import { checkHand } from './Poker';
import { it, describe, expect } from 'vitest';
import { createShuffledIdDeck, IdCard } from './deck';

describe('Check the value of a single hand?', () => {
  it('logs the values of the hand to the console', () => {
    const deck = createShuffledIdDeck();
    const randomHand: IdCard[] = [];
    randomHand.push(deck.pop() as IdCard);
    randomHand.push(deck.pop() as IdCard);
    randomHand.push(deck.pop() as IdCard);
    randomHand.push(deck.pop() as IdCard);
    randomHand.push(deck.pop() as IdCard);

    checkHand(randomHand);
    console.table(checkHand(randomHand));
    expect(1).toBe(1);
  });
  it('Checks the result when a straight flush is entered', () => {
    const spadeStr: IdCard[] = [
      { id: 42, suit: '♠', value: { Ace: [1, 14] } },
      { id: 41, suit: '♠', value: { King: [10, 13] } },
      { id: 40, suit: '♠', value: { Queen: [10, 12] } },
      { id: 39, suit: '♠', value: { Jack: [10, 11] } },
      { id: 38, suit: '♠', value: [10] }
    ];
    console.log('spade straight');
    const results = checkHand(spadeStr);
    console.table(checkHand(spadeStr));
    expect(results.straight && results.flush).toBe(true);
    expect(results.fourOf).toBe(false);
    expect(results.threeOf).toBe(false);
    expect(results.pair).toBe(false);
    expect(results.highcard).toBe(14);
  });
  it('Checks the result when a straight is entered', () => {
    const mixedStr: IdCard[] = [
      { id: 16, suit: '♦', value: { Ace: [1, 14] } },
      { id: 41, suit: '♠', value: { King: [10, 13] } },
      { id: 40, suit: '♠', value: { Queen: [10, 12] } },
      { id: 39, suit: '♠', value: { Jack: [10, 11] } },
      { id: 38, suit: '♠', value: [10] }
    ];
    console.log('Straight');
    const results = checkHand(mixedStr);
    console.table(checkHand(mixedStr));
    expect(results.straight).toBe(true);
    expect(results.flush).toBe(false);
    expect(results.fourOf).toBe(false);
    expect(results.threeOf).toBe(false);
    expect(results.pair).toBe(false);
    expect(results.highcard).toBe(14);
  });
});
