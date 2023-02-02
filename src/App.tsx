/* eslint-disable @typescript-eslint/no-unused-vars */
//const Card = require('./card.js');
import { createShuffledIdDeck, IdCard } from './deck';
import React, { useEffect, useState } from 'react';
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
import { io } from 'socket.io-client';
import { Trial } from './scenes/trial';
import { Logo } from './Logo';
import { LogoUnani } from './LogoUnani';

const url = import.meta.env.VITE_SOCKET_URL ?? 'null';

console.log(url);

const socket = io(url);
//-----------------------------------------------------do in useEffect
function App(): JSX.Element {
  const [playerHand, setPlayerHand] = useState<IdCard[]>([]);
  const [dealerHand, setDealerHand] = useState<IdCard[]>([]);

  const [deck, setDeck] = useState<IdCard[]>(createShuffledIdDeck());
  const [remainingCards, setRemainingCards] = useState<number | null>(null);

  useEffect(() => {
    socket.on(
      'game-update',
      async (rc, globalDeck, globalPlayerHand, globalDealerHand) => {
        // console.log('game-update recieved dealer'),
        setRemainingCards(rc),
          setDeck(globalDeck),
          setPlayerHand(globalPlayerHand),
          setDealerHand(globalDealerHand),
          console.log('ok!');
        console.table(playerHand), console.table(dealerHand);
      }
    );
    socket.on(
      'reset-game',
      async (rc, globalDeck, globalPlayerHand, globalDealerHand) => {
        // console.log('reset-update'),
        setRemainingCards(rc),
          setDeck(globalDeck),
          setPlayerHand(globalPlayerHand),
          setDealerHand(globalDealerHand),
          resetCards();
      }
    );

    //-------------------------------------------------------------desubscribe and disconnect on component unmount
  }, []);

  // const playerCard: IdCard = { id: 0, suit: '', value: [] };
  // const dealerCard: IdCard = { id: 0, suit: '', value: [] };

  function resetCards() {
    setDeck(createShuffledIdDeck());
    setPlayerHand([]);
    setDealerHand([]);
  }

  function dealCard(currentDeck: IdCard[]): IdCard {
    const newDeck: IdCard[] = [...currentDeck];
    let dealtCard: IdCard = { id: 0, suit: '', value: [] };
    try {
      if (newDeck.length > 0) {
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

  function handleCardClick(currentDeck: IdCard[]) {
    const newDeck: IdCard[] = [...currentDeck];
    let dealtCard: IdCard = { id: 0, suit: '', value: [] };
    try {
      dealtCard = dealCard(newDeck);
      const playerCard = dealtCard;
      newDeck.pop();
      dealtCard = dealCard(newDeck);
      const dealerCard = dealtCard;
      newDeck.pop();
      console.table(playerCard);
      console.table(dealerCard);
      setPlayerHand([...playerHand, playerCard]);
      setDealerHand([...dealerHand, dealerCard]);
      console.log('Hand is', playerHand);
      console.log('Hand is', dealerHand);
    } catch (error) {
      console.error('Card could not be loaded');
    } finally {
      setDeck([...newDeck]);
      console.log('Hand is', playerHand);
    }
  }

  // function dealPlayer(currentDeck: IdCard[]):IdCard {
  //   const newDeck: IdCard[] = [...currentDeck];
  //   let dealtCard: IdCard = { id: 0, suit: '', value: [] };
  //   setDeck([...newDeck])
  //   return dealtCard = newDeck.pop() as IdCard;
  // }

  // let clicked = false;

  return (
    <div className="ctn-fullscreen-start">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1} />
        <LogoUnani />
      </Canvas>
      {/* <Trial playerHand={playerHand} dealerHand={dealerHand} handleCardClick={handleCardClick} socket={socket} remainingCards={remainingCards}/> */}
    </div>
  );
}

export default App;
