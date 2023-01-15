import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import getCardName from './getCardName';
import { idCard } from './deck';

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    node_id4: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

interface CardModelProps extends JSX.IntrinsicElements {
  card: idCard;
  groupProps: JSX.IntrinsicElements['group'];
}

// function Plane({ color, ...props }: OurPlaneProps)

export default function CardModel({ card, ...props }: CardModelProps) {
  const { nodes, materials } = useGLTF(
    getCardName(card)
  ) as unknown as GLTFResult;
  useGLTF.preload(getCardName(card));
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

// export function Model(props: JSX.IntrinsicElements["group"]) {
//   const { nodes, materials } = useGLTF("/10 ♠.glb") as GLTFResult;
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.node_id4.geometry}
//         material={materials["34"]}
//         position={[0, 0, 0.26]}
//         rotation={[-Math.PI, 0, -Math.PI / 2]}
//         scale={0.14}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/10 ♠.glb");
