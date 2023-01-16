/* eslint-disable @typescript-eslint/no-unused-vars */
//const Card = require('./card.js');
import { Card, createShuffledIdDeck, shuffleDeck } from './deck';
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

  return (
    <div className="ctn-fullscreen-start">
      <div className="ctn-player-hand">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, -50, 0], fov: 90 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <mesh position={[15, 0, 0]}>
              <boxGeometry args={[10, 10, 10]} />
            </mesh>
            <mesh position={[-15, 0, 0]}>
              <boxGeometry args={[10, 10, 10]} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} scale={[10, 10, 10]}>
              <CardModel />
            </mesh>
            {/* {createShuffledIdDeck().map((card) => {
              return <CardModel key={card.id}> card={card}
                onClick={() => console.log(card.suit + " " + card.value)}/>
                  })}
                <OrbitControls /> */}
          </Canvas>
        </div>
      </div>
      <div className="ctn-dealer-hand">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, -50, 0], fov: 90 }}>
            <OrbitControls />
            <ambientLight intensity={1} />
            <mesh position={[15, 0, 0]}>
              <boxGeometry args={[10, 10, 10]} />
            </mesh>
            <mesh position={[-15, 0, 0]}>
              <boxGeometry args={[10, 10, 10]} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} scale={[10, 10, 10]}>
              <CardModel />
            </mesh>
            {/* {createShuffledIdDeck().map((card) => {
              return <CardModel key={card.id}> card={card}
                onClick={() => console.log(card.suit + " " + card.value)}/>
                  })}
                <OrbitControls /> */}
          </Canvas>
        </div>
      </div>
      <div className="ctn-options">
        <Canvas camera={{ position: [0, -50, 0] }}>
          <fogExp2 attach="fog" color="white" density={0.001} />
          <ambientLight intensity={1} />
          <mesh position={[150, 0, 0]}>
            <boxGeometry args={[50, 10, 10]} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[50, 10, 10]} />
          </mesh>
          <mesh position={[-150, 0, 0]}>
            <boxGeometry args={[50, 10, 10]} />
          </mesh>
        </Canvas>
      </div>
      <div className="ctn-score">
        <Canvas camera={{ position: [0, -50, 0] }}>
          <fogExp2 attach="fog" color="white" density={0.001} />
          <ambientLight intensity={1} />
          <mesh position={[150, 0, 0]}>
            <boxGeometry args={[50, 10, 10]} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[50, 10, 10]} />
          </mesh>
          <mesh position={[-150, 0, 0]}>
            <boxGeometry args={[50, 10, 10]} />
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
