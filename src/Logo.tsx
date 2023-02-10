/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    A: THREE.Mesh;
    N: THREE.Mesh;
    E: THREE.Mesh;
    T: THREE.Mesh;
    Text: THREE.Mesh;
    A_card: THREE.Mesh;
    n_card: THREE.Mesh;
    e_card: THREE.Mesh;
    t_card: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | 'A cardAction'
  | 'AAction'
  | 'NAction'
  | 'n cardAction'
  | 'EAction'
  | 'e cardAction'
  | 'TAction'
  | 't cardAction'
  | 'TextAction';

export function Logo() {
  const group = useRef<THREE.Group>();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = a;
    }
  });

  const { nodes, materials } = useGLTF(
    //,animations
    './model/trial logo - animation.glb'
  ) as unknown as GLTFResult;
  //   const { actions } = useAnimations(animations, group);
  return (
    <group name="Scene" position={[-3, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        name="A"
        castShadow
        receiveShadow
        geometry={nodes.A.geometry}
        material={materials['Material.001']}
        position={[1.39, -0.04, -0.24]}
        rotation={[0.01, 0.04, -0.02]}
        scale={[1, 0.1, 1]}
      />
      <mesh
        name="N"
        castShadow
        receiveShadow
        geometry={nodes.N.geometry}
        material={materials['Material.001']}
        position={[1.38, -0.02, -0.24]}
        rotation={[0, 0.01, -0.01]}
        scale={[1, 0.1, 1]}
      />
      <mesh
        name="E"
        castShadow
        receiveShadow
        geometry={nodes.E.geometry}
        material={materials['Material.001']}
        position={[1.42, 0.03, -0.26]}
        rotation={[0, -0.03, 0]}
        scale={[1, 0.1, 1]}
      />
      <mesh
        name="T"
        castShadow
        receiveShadow
        geometry={nodes.T.geometry}
        material={materials['Material.001']}
        position={[1.42, 0, -0.18]}
        rotation={[-0.01, 0.1, 0.02]}
        scale={[1, 0.1, 1]}
      />
      <mesh
        name="Text"
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.Material}
        position={[3.76, 0, -0.26]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0}
      />
      <mesh
        name="A_card"
        castShadow
        receiveShadow
        geometry={nodes.A_card.geometry}
        material={materials['Material.002']}
        position={[1.7, -0.05, -0.61]}
        rotation={[0.01, 0.04, -0.02]}
        scale={[0.5, 1, 0.75]}
      />
      <mesh
        name="n_card"
        castShadow
        receiveShadow
        geometry={nodes.n_card.geometry}
        material={materials['Material.002']}
        position={[1.71, -0.02, -0.6]}
        rotation={[0, 0.01, -0.01]}
        scale={[0.5, 1, 0.75]}
      />
      <mesh
        name="e_card"
        castShadow
        receiveShadow
        geometry={nodes.e_card.geometry}
        material={materials['Material.002']}
        position={[1.75, 0.03, -0.61]}
        rotation={[0, -0.03, 0]}
        scale={[0.5, 1, 0.75]}
      />
      <mesh
        name="t_card"
        castShadow
        receiveShadow
        geometry={nodes.t_card.geometry}
        material={materials['Material.002']}
        position={[1.7, 0.01, -0.57]}
        rotation={[-0.01, 0.1, 0.02]}
        scale={[0.5, 1, 0.75]}
      />
    </group>
  );
}

useGLTF.preload('/trial logo - animation.glb');