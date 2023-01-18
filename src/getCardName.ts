import { IdCard } from './deck';

export default function getCardName(card: IdCard | undefined | null) {
  if (!card) {
    return '';
  }
  return `./model/${
    Array.isArray(card.value) ? card.value[0] : Object.keys(card.value)[0]
  } ${card.suit}.glb`;
}
