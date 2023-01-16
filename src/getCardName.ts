import { Card, idCard } from './deck';

export default function getCardName(card: idCard | undefined | null) {
  if (!card) {
    return '';
  }
  return `./model/${
    Array.isArray(card.value) ? card.value[0] : Object.keys(card.value)[0]
  } ${card.suit}.glb`;
}
