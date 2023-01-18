import { IdCard } from './deck';

export function findValue(card: IdCard): number[] {
  if (Array.isArray(card.value)) {
    return card.value;
  }

  const face: string = Object.keys(card.value)[0];

  return card.value.face;
}
