/* eslint-disable @typescript-eslint/no-unused-vars */
//const Card = require('./card.js');
import { Card, createShuffledIdDeck, shuffleDeck } from './deck';
import { useState } from 'react';
import { HandView } from './HandView';
import { CardView } from './CardView';

function App(): JSX.Element {
  // const [deck,setDeck] = useState<Card[]>(createDeckArray());
  // const [hand, setHand] = useState<Card[]>([]);

  //state:
  //deck:Card[]
  //hand:Card[]

  return (
    <>
      hello app
      <p>Shuffled deck:</p>
      <p>
        {createShuffledIdDeck().map((card, index) => (
          <p key={index}>{card.suit + JSON.stringify(card.value)}</p>
        ))}
      </p>
      {/* <HandView /> */}
      {/* <CardView /> //to count cards remaining */}
      {/*/ ^ for now view all cards in the deck

     //controls:

     //buttons: 
     //shuffleDeck: tells react we want to change the state of the deck. 
      // sets deck to a new copy 
      // Makes a deep copy then shuffles the positions of the Crads within the array sets the deck to that copy
    // dealOne: hand.push(deck.pop())
      // const clonedDeck:Card[] = deck.clone <= a member function of our class
      // const topCard = clonedDeck.pop() <= mutates the cloned deck returned by Deck.clone
      // setHand(...prevHand, topCard)
      // setDeck(clonedDeck)
     //restart: 
  //remove all cards within deck and hands, create new deck, shuffle (and deal starting hands or 0)*/}
    </>
  );
}

export default App;
/* eslint-enable @typescript-eslint/no-unused-vars */