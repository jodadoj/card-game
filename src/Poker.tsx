import { IdCard } from './deck';
import { findSuit } from './findSuit.ts';
import { findHighValue, findWrappedValue } from './findValue';
interface PokerProps {
  playerHands: IdCard[][];
}

export interface handScore {
  highcard: number;
  straight: number[];
  flush: string[];
  fourOf: number[];
  fullHouse: number[];
  twoPair: number[];
  threeOf: number[];
  pair: number[];
}

export interface handResult {
  highcard: number;
  straight: boolean;
  flush: boolean;
  fourOf: boolean;
  fullHouse: boolean;
  twoPair: boolean;
  threeOf: boolean;
  pair: boolean;
}

export type HashMap<T> = { [key: string]: T };

// export function isFlush(hand: IdCard[]): boolean {
//   const i = 0;
//   const currentSuit: string = hand[i].suit;
//   const matchingSuits = hand.filter((card) => {
//     card.suit === currentSuit;
//   });
//   if (matchingSuits.length == 5) {
//   }
//   return false;
// }

export function getValues(hand: IdCard[]): number[] {
  return hand.map((card) => {
    return findHighValue(card);
  });
}

export function getWrappedValues(hand: IdCard[]): number[] {
  return hand.map((card) => {
    return findWrappedValue(card);
  });
}

export function checkHand(hand: IdCard[], wrapAces = false): handResult {
  const valueHash: Record<number, number> = {}; //create empty objects
  const suitHash: Record<string, number> = {};
  // let result:Record<string, number[]|string[]>={};
  const result: handScore = {
    highcard: -1,
    straight: [],
    flush: [],
    fourOf: [],
    fullHouse: [],
    twoPair: [],
    threeOf: [],
    pair: []
  };

  console.log('current hand');
  console.table(hand);

  for (const card of hand) {
    const currentValue = findHighValue(card);
    const currentSuit = findSuit(card);
    if (result.highcard < currentValue) {
      result.highcard = currentValue;
    }
    if (!valueHash[currentValue]) {
      valueHash[currentValue] = 1;
    } else {
      valueHash[currentValue] += 1;
    }
    if (!suitHash[currentSuit]) {
      suitHash[currentSuit] = 1;
    } else {
      suitHash[currentSuit] += 1;
    }
  }

  console.log('values');
  console.table(valueHash);
  console.log('suits');
  console.table(suitHash);

  for (const [key, value] of Object.entries(suitHash)) {
    if (value === 5) {
      // result['flush']=[];
      result.flush.push(key);
      console.log('Found flush');
    }
  }
  for (const [key, value] of Object.entries(valueHash)) {
    if (value === 2) {
      // if(!result['pair']){
      // result['pair']=[];
      result.pair.push(Number(key));
      console.log('Found pair');
      // }
    }
    if (value === 3) {
      // if(!result['threeOf']){
      // result['threeOf']=[];
      result.threeOf.push(Number(key));
      console.log('Found Three of a Kind');
      // }
    }
    if (value === 4) {
      // if(!result['fourOf']){
      // result['fourOf']=[];
      result.fourOf.push(Number(key));
      console.log('Found Four of a Kind');
      // }
    }
  }
  let prevValue = 0;
  let isStraight = true;
  console.log('looking for straight');
  //if the array included a 2, an Ace and a King
  //maybe do typeof like typeof(valueHash[2]) === 'number'
  if (wrapAces && valueHash[2] && valueHash[14] && valueHash[13]) {
    console.log('aces wrap around');
    const wrappedValues: number[] = getWrappedValues(hand).sort();
    prevValue = wrappedValues[0] - 1;
    for (const current of wrappedValues) {
      if (current !== prevValue + 1) {
        isStraight = false;
      }
      prevValue++;
    }
    if (isStraight) {
      // if(!result['straight']){
      // result['straight']=[];
      result.straight.push(result.highcard);
      // }
    }
  } else {
    console.log("aces don't wrap");
    const sortedValues: number[] = getValues(hand).sort();
    console.table(sortedValues);
    prevValue = sortedValues[0] - 1;
    for (const current of sortedValues) {
      if (current !== prevValue + 1) {
        isStraight = false;
      }
      prevValue++;
    }
    if (isStraight) {
      // if(!result['straight']){
      // result['straight']=[];
      result.straight.push(result.highcard);
      // }
    }
  }

  console.table(result);

  return {
    highcard: result.highcard,
    straight: result.straight.pop() !== undefined,
    flush: result.flush.pop() !== undefined,
    fourOf: result.fourOf.pop() !== undefined,
    fullHouse: result.fullHouse.pop() !== undefined,
    twoPair: result.twoPair.pop() !== undefined,
    threeOf: result.threeOf.pop() !== undefined,
    pair: result.pair.pop() !== undefined && result.pair.pop() !== 1
  };
}

export function Poker(props: PokerProps): JSX.Element {
  const playerHands: IdCard[][] = props.playerHands;

  const handScore: string[] = [];
  for (const hand in playerHands) {
    handScore[hand] = checkHand(playerHands[hand]) ? 'Flush' : '';
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

// I think it's correct to use a hash map here

/*

function checkHand(hand:IdCard[], wrapAces:boolean=false):string{

    let valueHash:Record<number, number>={}; //create empty objects
    let suitHash:Record<string, number>={};
    let result:Record<string, <number|string>[]>={}};

    for (let card of hand){
        if (!valueHash[findHighValue(card)]){
            valueHash[findHighValue(card)]=1;
        }
        else{
            valueHash[findHighValue(card)]+=1;
        }
        if (!suitHash[findSuit(card)]){
            suitHash[findSuit(card)]=1;
        }
        else{
            suitHash[findSuit(card)]+=1;
        }
    }
    for (const [key,value] of Object.entries(suitHash)){
        if (value === 5){
            result[flush]=[];
            result.flush.push(key);
        }
    }
    for (const [key,value] of Object.entries(valueHash)){
        if (value === 2){
            if(!result[pair]){
                result[pair]=[];
                result.pair.push(key);
            }
        }
        if (value === 3){
            if(!result[threeOf]){
                result[threeOf]=[];
                result.threeOf.push(key);
            }
        }
        if (value === 4){
            if(!result[fourOf]){
                result[fourOf]=[];
                result.fourOf.push(key);
            }
        }
    }
    let prevValue = 0;
    let isStraight = true;
    if (wrapAces && valueHash[2] && valueHash[14] && valueHash[13]){
        const wrappedValues:IdCard[] = getWrappedValues(hand).sort();
        if(!result[highCard]){
            result[highCard]=[]
            result.highCard.push(wrappedValues[4])
        }
        prevValue = wrappedValues[0]-1;
        for (const current of wrappedValues){
            if(current !== prevValue+1){
                isStraight = false;
            }
            prevValue++;
        }
        if (isStraight){
            if (value === 2){
                if(!result[straight]){
                    result[straight]=[];
                    result.straight.push(result.highcard[0]);
                }
            }
        }
    }
    else{
        const sortedValues:IdCard[] = getValues(hand).sort();
        if(!result[highCard]){
            result[highCard]=[]
            result.highCard.push(wrappedValues[4])
        }
        prevValue = sortedValues[0]-1;
        for (const current of sortedValues){
            if(current !== prevValue+1){
                isStraight = false;
            }
            prevValue++;
        }
        if (isStraight){
            if (value === 2){
                if(!result[straight]){
                    result[straight]=[];
                    result.straight.push(result.highcard[0]);
                }
            }
        }
    }

    let handScore = {
        highcard: result.highCard[0];
        straight: (result[straight]));
        flush: (result[straight]);
        fourOf: (result[straight]);
        fullHouse: (result[straight]);
        twoPair: (result[straight]);
        threeOf: (result[straight]);
        pair: (result[pair] && result.pair===1)


    }
    if ()


}

*/
