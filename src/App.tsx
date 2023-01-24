/* eslint-disable @typescript-eslint/no-unused-vars */
//const Card = require('./card.js');
import { createShuffledIdDeck, IdCard } from './deck';
import React, { useState } from 'react';
import { HandView } from './HandView';
import { CardView } from './CardView';
import { Canvas, Euler } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Physics } from '@react-three/rapier';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CardModel from './CardModel';
import { King } from './King';
import { Fog } from 'three';
import { Blackjack } from './Blackjack';

function App(): JSX.Element {
  // const [deck,setDeck] = useState<Card[]>(createDeckArray());
  // const [hand, setHand] = useState<Card[]>([]);

  //state:
  //deck:Card[]
  //hand:Card[]

  const deg2rad = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };

  // const Scene = () => {
  //   useThree(({ camera }) => {
  //     camera.rotation.set(deg2rad(30), 0, 0);
  //     camera.position.x = 5;
  //     camera.position.y = 5;
  //     camera.position.z = 5;

  //   });
  // }

  const [playerHand, setPlayerHand] = useState<IdCard[]>([]);
  const [dealerHand, setDealerHand] = useState<IdCard[]>([]);

  const [deck, setDeck] = useState<IdCard[]>(createShuffledIdDeck());
  // const playerCard: IdCard = { id: 0, suit: '', value: [] };
  // const dealerCard: IdCard = { id: 0, suit: '', value: [] };

  function dealCard(currentDeck: IdCard[]): IdCard {
    const newDeck: IdCard[] = [...currentDeck];
    let dealtCard: IdCard = { id: 0, suit: '', value: [] };
    try {
      if (newDeck.length > 1) {
        dealtCard = newDeck.pop() as IdCard;
      }
      if (newDeck.length <= 0) {
        console.error('Deck empty');
      }
    } catch (error) {
      console.error('Use restart function or reload for new deck');
    }
    return dealtCard;
  }

  function handleCardClick(currentDeck: IdCard[]): IdCard {
    const newDeck: IdCard[] = [...currentDeck];
    let dealtCard: IdCard = { id: 0, suit: '', value: [] };
    try {
      dealtCard = dealCard(newDeck);
      console.log(dealtCard);
      newDeck.pop();
    } catch (error) {
      console.error('Card could not be loaded');
    } finally {
      setDeck([...newDeck]);
      console.log('Deck is', deck);
    }
    return dealtCard;
  }

  // function dealPlayer(currentDeck: IdCard[]):IdCard {
  //   const newDeck: IdCard[] = [...currentDeck];
  //   let dealtCard: IdCard = { id: 0, suit: '', value: [] };
  //   setDeck([...newDeck])
  //   return dealtCard = newDeck.pop() as IdCard;
  // }

  return (
    <div className="ctn-fullscreen-start">
      <div className="ctn-player-hand">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, -50, 0], fov: 90 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <group scale={[10, 10, 10]}>
              {playerHand[0] &&
                playerHand.map((card, i) => {
                  return (
                    <CardModel
                      card={card}
                      key={card.id}
                      position={[
                        i * 2 - playerHand.length / 2,
                        0,
                        Math.random() * 0.25 - 0.125
                      ]}
                    />
                  );
                })}
            </group>
          </Canvas>
        </div>
      </div>
      <div className="ctn-dealer-hand">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, -50, 0], fov: 90 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <group scale={[10, 10, 10]}>
              {dealerHand[0] &&
                dealerHand.map((card, i) => {
                  return (
                    <CardModel
                      card={card}
                      key={card.id}
                      position={[
                        i * 2 - dealerHand.length / 2,
                        0,
                        Math.random() * 0.25 - 0.125
                      ]}
                    />
                  );
                })}
            </group>
          </Canvas>
        </div>
      </div>
      {/* <div className="ctn-deck-view">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, -50, 0], fov: 90 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <group scale={[10, 10, 10]}>
              {deck.map((card, i) => {
                return (<CardModel card={card} key={card.id} position={[i * 2 - deck.length / 2, 0, Math.random() * 0.25 - 0.125]} />)
              })};
            </group>
          </Canvas>
        </div>
      </div> 
        {setPlayerHand([...playerHand, handleCardClick(deck)])}
        {setPlayerHand([...playerHand, handleCardClick(deck)])}
        {setDealerHand([...dealerHand, handleCardClick(deck)])}
        {setDealerHand([...dealerHand, handleCardClick(deck)])}*/}
      <div className="ctn-totals">
        <Blackjack playerHand={playerHand} dealerHand={dealerHand} />
        <button
          onClick={(e) => {
            setPlayerHand([]);
            setDealerHand([]);
            setDeck(createShuffledIdDeck());
          }}
        >
          RESET
        </button>
      </div>
      <div className="ctn-options">
        <Canvas camera={{ position: [0, -10, 0] }}>
          <ambientLight intensity={1} />
          <mesh
            position={[0, 0, 0]}
            scale={[2, 2, 2]}
            rotation={[Math.PI / 2, 0, 0]}
            onClick={(e) => {
              setPlayerHand([...playerHand, handleCardClick(deck)]),
                console.log('Player hand is ', playerHand);
            }}
          >
            <Text3D font={'./fonts/Roboto Mono_Bold.json'}>
              Deal player
              <meshStandardMaterial color={0xdb1f48} />
            </Text3D>
          </mesh>
        </Canvas>
      </div>
      <div className="ctn-score">
        <Canvas camera={{ position: [0, -10, 0] }}>
          <ambientLight intensity={1} />
          <mesh
            position={[0, 0, 0]}
            scale={[2, 2, 2]}
            rotation={[Math.PI / 2, 0, 0]}
            onClick={(e) => {
              setDealerHand([...dealerHand, handleCardClick(deck)]),
                console.log('Dealer hand is ', dealerHand);
            }}
          >
            <Text3D font={'./fonts/Roboto Mono_Bold.json'}>
              Deal dealer
              <meshStandardMaterial color={0xdb1f48} />
            </Text3D>
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default App;

// {createShuffledIdDeck().map((card) => {
//   return <CardModel key={card.id}> card={card}
//     onClick={() => console.log(card.suit + " " + card.value)}/>
//       })}
