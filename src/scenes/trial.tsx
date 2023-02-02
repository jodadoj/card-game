/* eslint-disable @typescript-eslint/no-unused-vars */
//const Card = require('./card.js');
import { createShuffledIdDeck, IdCard } from '../deck';
import React, { useEffect, useState } from 'react';
import { HandView } from '../HandView';
import { CardView } from '../CardView';
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
import CardModel from '../CardModel';
import { King } from '../King';
import { Fog } from 'three';
import { Blackjack } from '../Blackjack';
import { io } from 'socket.io-client';

interface ITrialProps {
  playerHand: IdCard[];
  dealerHand: IdCard[];
  handleCardClick: (cDeck: IdCard[]) => void;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  remainingCards: number | null;
}

export function Trial(props: ITrialProps): JSX.Element {
  const playerHand = props.playerHand;
  const dealerHand = props.dealerHand;
  const remainingCards = props.remainingCards;

  return (
    <div className="ctn-fullscreen-start">
      <div className="ctn-player-hand">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, -50, 0], fov: 90 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <group scale={[10, 10, 10]}>
              {playerHand[0] &&
                playerHand.map((card: IdCard, i: number) => {
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
            socket.emit('reset-requested'), console.log('sent "rr"');
          }}
        >
          {remainingCards
            ? 'RESET - current count is ' + remainingCards
            : 'RESET - no remaining cards'}
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
              console.log('HI!'),
                handleCardClick(deck),
                console.table(dealerHand),
                socket.emit('twist-requested', deck, playerHand, dealerHand),
                console.log('sent "tr"');
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
              console.log('HI!'),
                handleCardClick(deck),
                console.table(dealerHand),
                socket.emit('twist-requested', deck, playerHand, dealerHand),
                console.log('sent "tr"');
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
