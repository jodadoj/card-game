import * as THREE from 'three';
// import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
// import getCardName from './getCardName';
// import { idCard } from './deck';

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    // node_id4: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    // ['34']: THREE.MeshStandardMaterial;
  };
};

// type CardModelProps = {
//   props: NonNullable<JSX.IntrinsicElements['group']>;
// }

// function Plane({ color, ...props }: OurPlaneProps)

// type OurPlaneProps = Pick<MeshPhongMaterialProps, 'color'> & Pick<PlaneProps, 'position' | 'rotation'>

// function Plane({ color, ...props }: OurPlaneProps) {

// let setCard:idCard;

export default function CardModel(props: JSX.IntrinsicElements['group']) {
  // setCard = card;
  // const { nodes, materials } = useGLTF(
  //   getCardName(card)
  // ) as unknown as GLTFResult;
  const { nodes, materials } = useGLTF('/10 ♠.glb') as unknown as GLTFResult;

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

// useGLTF.preload(getCardName(setCard));

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

useGLTF.preload('/10 ♠.glb');
