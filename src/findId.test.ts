import { it, describe, expect } from 'vitest';
import {
  createDeckArray,
  createShuffledIdDeck,
  IdCard,
  idFreshDeck
} from './deck';
import { findCorrectId } from './findId';

describe('What object is created by createDeck?', () => {
  it('logs the values of differentSuits to the console', () => {
    const randomCard: IdCard = createShuffledIdDeck().pop() as IdCard;
    console.table(idFreshDeck(createDeckArray()));
    console.log(randomCard);
    console.log(findCorrectId(randomCard));
    expect(1).toBe(1);
  });
});
