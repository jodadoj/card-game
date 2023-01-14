import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function CardModel(props) {
  const { nodes, materials } = useGLTF(
    `./model/${
      Array.isArray(props.card.value)
        ? props.card.value[0]
        : Object.keys(props.value.face)[0]
    } ${props.card.suit}+'.gltf`
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Material}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload(
  `./model/${
    Array.isArray(props.card.value)
      ? props.card.value[0]
      : Object.keys(props.value.face)[0]
  } ${props.card.suit}+'.gltf`
);
