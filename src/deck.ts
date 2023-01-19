//--------------------------------------------------------------------------------defining our Cards

export interface Card {
  suit: string;
  value: { [face: string]: number[] } | number[];
}

export interface IdCard extends Card {
  id: number;
}

const differentSuits: string[] = ['♥', '♦', '♣', '♠'];
const differentValues: {
  face: { [face: string]: number[] }[];
  number: number[][];
} = {
  face: [
    { King: [10, 13] },
    { Queen: [10, 12] },

    { Jack: [10, 11] },
    { Ace: [1, 14] }
  ],

  //can just have a face and have a seperate getValue function

  // last values are to show order in highcard,
  //logic for ace can instead use 11 to trump the 10s so no need to make 15
  number: [[10], [9], [8], [7], [6], [5], [4], [3], [2]]
};

//--------------------------------------------------------------------------------------Defining our deck

export function createDeckArray(): Card[] {
  return differentSuits.flatMap((suit) => {
    return Object.values(differentValues).flatMap((key) => {
      return key.map((value) => {
        return { suit, value };
      });
    });
  });
}

//-----------------------------------------------------------------want to id every card to allow marking, removing from deck, duplicating etc etc

export function idFreshDeck(freshDeck: Card[]): IdCard[] {
  const idDeck: IdCard[] = freshDeck.map((card, index): IdCard => {
    return Object.assign(
      { id: index },
      { suit: card.suit },
      { value: card.value }
    );
  });
  return idDeck;
}

export function createMarkedDeck(): IdCard[] {
  return idFreshDeck(createDeckArray());
}

export function createShuffledIdDeck() {
  return shuffleDeck(createMarkedDeck());
}

// if (Array.isArray(card.value)) {
//   card.value.push(id);
// } else if (Object.keys(card.value)[0]=='face'){
//   card.value.face.push(id);
// }

// var obj_arr_appended = obj_arr.map(function(currentValue, Index) {
//   currentValue.SERIAL_NO = Index
//   return currentValue
// })

//---------------------------------------------------------------------------------------Shuffling

// think it's important to search for improved fisher yates algorithm later but:

//   -- To shuffle an array a of n elements (indices 0..n-1):
//      for i from n−1 downto 1 do
//      j ← random integer such that 0 ≤ j ≤ i
//      exchange a[j] and a[i]

export function shuffleDeck(unshuffledDeck: IdCard[]): IdCard[] {
  const shuffledDeck = unshuffledDeck;
  for (
    let currentCard = shuffledDeck.length - 1;
    currentCard > 0;
    currentCard--
  ) {
    //our current card is marked in deck
    const differentCard = Math.floor(Math.random() * currentCard + 1); //a different card is found somewhere and also marked
    const originalCard = shuffledDeck[differentCard]; //we make a note to put that card where we found our first
    shuffledDeck[differentCard] = shuffledDeck[currentCard]; //we put our current card where that card was
    shuffledDeck[currentCard] = originalCard; //then move the original into the space we're currently in
    //repeat until every card has been moved at least once
  }
  for (
    let currentCard = 0;
    currentCard < shuffledDeck.length - 1;
    currentCard++
  ) {
    //shuffle again in reverse
    const differentCard = Math.floor(Math.random() * currentCard + 1);
    const originalCard = shuffledDeck[differentCard];
    shuffledDeck[differentCard] = shuffledDeck[currentCard];
    shuffledDeck[currentCard] = originalCard;
    //this is pointless but the time it takes is neglible and also should make sure every card is moved at least twice
    //essentially harmless and exponetially in theory more "random feeling" due to taking more time
  }
  return shuffledDeck;
}

// //--------------------------------------------------------------------------------------Old

// export class Deck {
//   public cards: Card[];

//   public constructor(cards = createDeckArray()) {
//     this.cards = cards;
//   }

//   get deckSize(): number {
//     return this.cards.length;
//   }
// export class Card {
//   public suit: string;
//   public value: { [face: string]: number[] } | number[];

//   public constructor(
//     suit: string,
//     value: { [face: string]: number[] } | number[]
//   ) {
//     this.suit = suit;
//     this.value = value;
//   }
// }
// }

/*
createDeckObject():function

returns a full list of cards in a 52 card deck when called as an object

values will have the form of objects with {suit: value}

to start map through suits
create a key in the form of {[suit: string]: number|string}

so every suit needs to have a map through
*/

/*
Notes on new features

Implemenmt better shuffle => have to be better algorithms out there for more comprehensive shugffle mechanics
Need cards ids for rigging the shuffle (choosing spefic cards out of the deck)
*/
