import { IdCard } from './deck';
import { findName } from './findValue';

export function findSuit(card: IdCard): string {
  return card.suit;
}

export function findFullName(card: IdCard): number | string {
  const fullName: string = findName(card).toString() + ' ' + findSuit(card);

  return fullName;
}
