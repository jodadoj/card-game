import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export function Card(props) {
  const { nodes, materials } = useGLTF('./model/card.gltf');
  return (
    <RigidBody
      colliders="hull"
      position={[
        3 - Math.random() * 6,
        3 - Math.random() * 6,
        3 - Math.random() * 6
      ]}
    >
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Material.001']}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload('/card.gltf');
