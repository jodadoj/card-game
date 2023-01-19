import * as THREE from 'three';
// import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import getCardName from './getCardName';
import { IdCard } from './deck';

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

// ['34']: THREE.MeshStandardMaterial;
// node_id4: THREE.Mesh;

interface CardModelProps {
  card: IdCard;
  position: [x: number, y: number, z: number];
}

// type CardModelProps = {
//   props: NonNullable<JSX.IntrinsicElements['group']>;
// }

// function Plane({ color, ...props }: OurPlaneProps)

// type OurPlaneProps = Pick<MeshPhongMaterialProps, 'color'> & Pick<PlaneProps, 'position' | 'rotation'>

// function Plane({ color, ...props }: OurPlaneProps) {

// let setCard:idCard;

export default function CardModel(props: CardModelProps): JSX.Element {
  const card: IdCard = props.card;
  // console.log('card is ', card);
  const { nodes, materials } = useGLTF(
    getCardName(card)
  ) as unknown as GLTFResult;

  return (
    <group position={props.position}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  );
}

//useGLTF.preload('/model/10 ♠.glb');
