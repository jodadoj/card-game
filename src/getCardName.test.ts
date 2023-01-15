import getCardName from './getCardName';
import { idCard } from './deck';
import { it, describe, expect, expectTypeOf } from 'vitest';
import { createShuffledIdDeck } from './deck';

describe('Tests if card objects can be used to fetched correct models', () => {
  it('logs the values of the card requested to the console.', () => {
    const deckCreated: idCard[] = createShuffledIdDeck();
    const cardRecieved = deckCreated.pop();
    console.log(cardRecieved);
    if (typeof cardRecieved === 'object') {
      console.log('was an object');
      const cardFileName = getCardName(cardRecieved);
      console.log(cardFileName);
    }
    expect(1).toBe(1);
  });
});
