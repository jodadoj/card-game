import { createDeckArray, IdCard, idFreshDeck } from './deck';

export function findCorrectId(card: IdCard): number {
  const orderedIdDeck: IdCard[] = idFreshDeck(createDeckArray());

  return orderedIdDeck[card.id].id;
}

export function fakeCard(card: IdCard): boolean {
  return card.id === findCorrectId(card);
}
