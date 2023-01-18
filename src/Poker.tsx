import { IdCard } from './deck';
import { findValue } from './findValue';
interface PokerProps {
  playerHands: IdCard[][];
}

export function isFlush(hand: IdCard[]): boolean {
  const i = 0;
  const currentSuit: string = hand[i].suit;
  const matchingSuits = hand.filter((card) => {
    card.suit === currentSuit;
  });
  if (matchingSuits.length == 5) {
    const handValues: number[] = matchingSuits.map((card) => {
      const currentValue: number = findValue(card).slice(-1)[0];
      return currentValue === 11 ? 1 : currentValue;
    });
  }
  return false;
}
//at some point allow Aces to wrap around

export function Poker(props: PokerProps): JSX.Element {
  const playerHands: IdCard[][] = props.playerHands;

  const handScore: string[] = [];
  for (const hand in playerHands) {
    handScore[hand] = isFlush(playerHands[hand]) ? 'Flush' : '';
  }

  //sort by correctId then see if the last id matches the next or is ascending/descending
  //will basically find every other hand
  //add them to a hash and calculate the max of one value
  // console.log('hi ', orderedIdDeck.slice(-1))

  return <div>WORK IN PROGRESS</div>;
}

// High Card: Hands which do not fit any higher category are ranked by the value of their highest card.
// If the highest cards have the same value, the hands are ranked by the next highest, and so on.

// Pair: 2 of the 5 cards in the hand have the same value.
// Hands which both contain a pair are ranked by the value of the cards forming the pair.
// If these values are the same, the hands are ranked by the values of the cards not forming the pair, in decreasing order.

// Two Pairs: The hand contains 2 different pairs.
// Hands which both contain 2 pairs are ranked by the value of their highest pair.
// Hands with the same highest pair are ranked by the value of their other pair.
// If these values are the same the hands are ranked by the value of the remaining card.

// Three of a Kind: Three of the cards in the hand have the same value.
// Hands which both contain three of a kind are ranked by the value of the 3 cards.

// Straight: Hand contains 5 cards with consecutive values.
// Hands which both contain a straight are ranked by their highest card.

// Flush: Hand contains 5 cards of the same suit.
// Hands which are both flushes are ranked using the rules for High Card.

// Full House: 3 cards of the same value, with the remaining 2 cards forming a pair.
// Ranked by the value of the 3 cards.

// Four of a kind: 4 cards with the same value.
// Ranked by the value of the 4 cards.

// Straight flush: 5 cards of the same suit with consecutive values.
// Ranked by the highest card in the hand.
