/* eslint-disable @typescript-eslint/no-unused-vars */
//const Card = require('./card.js');
import { Card, createShuffledIdDeck, shuffleDeck } from './deck';
import { useState } from 'react';
import { HandView } from './HandView';
import { CardView } from './CardView';
import { Canvas, Euler } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Suspense } from 'react'
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Physics } from "@react-three/rapier";
import { Float } from "@react-three/drei";
import { CardModel } from "./card.jsx"

function App(): JSX.Element {
  // const [deck,setDeck] = useState<Card[]>(createDeckArray());
  // const [hand, setHand] = useState<Card[]>([]);

  //state:
  //deck:Card[]
  //hand:Card[]

  return (
    <div>
      <div className="canvas-container">
        <Canvas>
          <Float>
            <Text3D position={[-30, 4, 0]} font={'/fonts/Roboto Mono_Bold.json'}> Click here to ADD a Pokeball!
              <meshStandardMaterial color={0xdb1f48} />
            </Text3D>
          </Float>
          <Float>
            <Text3D position={[3, 6, 0]} font={'/fonts/Roboto Mono_Bold.json'}> Click here to REMOVE a Pokeball!
              <meshStandardMaterial color={0xdb1f48} />
            </Text3D>
          </Float>
          <OrbitControls />
          <ambientLight intensity={1} />
          <Suspense> { /* Allows async operations in React */}
            <Physics>
                {createShuffledIdDeck().map((card) => {
                  return <CardModel key={card.id}> card={card} 
                  onClick={() => console.log(card.suit+ " "+card.value)}/>
                })}
              <RigidBody colliders="trimesh" type="fixed">
                <Plane
                  position={[0, -20, 0]}
                  args={[60, 60]}
                  rotation={[Math.PI * -0.5, 0, 0]}
                  receiveShadow>
                  <shadowMaterial opacity={0.2} />
                  <meshStandardMaterial color={0x75e6da} />
                </Plane>
              </RigidBody>
            </Physics>
          </Suspense>
        </Canvas>
    </div >
  );
}
          
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

export default App;
/* eslint-enable @typescript-eslint/no-unused-vars */
