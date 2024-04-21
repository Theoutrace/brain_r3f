import React from "react";
import { useGLTF } from "@react-three/drei";

const Cube = (props) => {
  const { nodes, materials } = useGLTF("/assets/room-transformed.glb");
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Left wall */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Material.002"]}
        />
        {/* Right wall */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.003"]}
        />
        {/* left Chair back support */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.krzeslo_1}
        /> */}
        {/* front Chair back support */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.krzeslo_okno}
        /> */}
        {/* Right Chair back support */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.krzeslo_prawe}
        /> */}
        {/* Hind Chair back support */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.krzeslo_srodek}
        /> */}
        {/* Floor */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.podloga}
        />
        {/* Front wall */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.sciana_okno}
        />
        {/* Table top */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials["stolik.001"]}
        /> */}
        {/* Cups on table */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials["Material.006"]}
        /> */}
        {/* Tray on table */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Material.004"]}
        /> */}
        {/* Lamps */}
        {/* <mesh geometry={nodes.Object_13.geometry}>
          <meshStandardMaterial transparent opacity={0.5} />
        </mesh> */}
        {/* Front window Grid */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials["Material.002"]}
        /> */}
        {/* Lamp frames */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials["Material.005"]}
        /> */}
        {/* Chair seating cushions */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.mata}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.stolik}
        /> */}
      </group>
    </group>
  );
};
useGLTF.preload("/assets/room-transformed.glb");
export default Cube;
