import { IdCard } from './deck';

export function findValue(card: IdCard): number[] {
  if (Array.isArray(card.value)) {
    return card.value;
  }

  const face: string = Object.keys(card.value)[0];

  return card.value[face];
}

export function findName(card: IdCard): number | string {
  if (Array.isArray(card.value)) {
    return card.value[0];
  }
  const face: string = Object.keys(card.value)[0];

  return face;
}

export function findHighValue(card: IdCard): number {
  if (Array.isArray(card.value)) {
    return card.value[0];
  }
  const face: string = Object.keys(card.value)[0];

  return card.value[face][1];
}

export function findWrappedValue(card: IdCard): number {
  if (Array.isArray(card.value)) {
    return card.value[0];
  }

  const face: string = Object.keys(card.value)[0];

  return card.value[face][1] - 13;
}
