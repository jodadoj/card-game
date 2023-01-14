import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export function CardModel(props) {
  const { nodes, materials } = useGLTF(`./model/${Array.isArray(props.card.value) ? props.card.value[0] : Object.keys(props.value.face)[0]} ${props.card.suit}+'.gltf`);
  return (
    <RigidBody
      colliders="hull"
      position={[Math.random() * 200, Math.random() * 200, Math.random() * 200]}
    >
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Material}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload('/card.gltf');
