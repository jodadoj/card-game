
import { Suspense } from 'react'

import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import { Plane } from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";

import { Physics } from "@react-three/rapier";

import { Float } from "@react-three/drei";

function App() {
  return(
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={1} />
      <Suspense> { /* Allows async operations in React */}
        <Physics>

          {pokeballList.map((currentPokeballId) => {
            return <Pokeball id={currentPokeballId} key={currentPokeballId}
              onClick={() => console.log(currentPokeballId + ' hi')} />
          })}

          <RigidBody colliders="trimesh" type="fixed">
            <Plane
              position={[0, -20, 0]}
              args={[60, 60]}
              rotation={[ Math.PI*-0.5,0,0 ]}
              receiveShadow>
              <shadowMaterial opacity={0.2} />
              <meshStandardMaterial color={0x75e6da} />
            </Plane>
          </RigidBody>
        </Physics>
      </Suspense>
    </Canvas>)
}

export default App;
