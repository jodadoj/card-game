/* eslint-disable @typescript-eslint/no-unused-vars */
//const Card = require('./card.js');
import { Card, createShuffledIdDeck, shuffleDeck } from './deck';
import { useState } from 'react';
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
import { CardModel } from './card.jsx';

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
    <div className="canvas-container">
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
        </mesh>
        {/* {createShuffledIdDeck().map((card) => {
            return <CardModel key={card.id}> card={card}
              onClick={() => console.log(card.suit + " " + card.value)}/>
                })}
              <OrbitControls />
              <ambientLight intensity={1} /> */}
      </Canvas>
    </div>
  );
}

export default App;
