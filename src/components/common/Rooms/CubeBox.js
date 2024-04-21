import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";
import Wall from "../Wall/Wall";

const CubeBox = ({ wallColor, floorTile }) => {
  const texture = useLoader(TextureLoader, floorTile);

  const tileSizeX = 5; // Width of each tile
  const tileSizeY = 5; // Height of each tile

  const repeatX = 39 / tileSizeX; // Total width of the plane divided by the width of each tile
  const repeatY = 38 / tileSizeY; // Total height of the plane divided by the height of each tile
  texture.repeat.set(repeatX, repeatY);

  // Calculate the offset to create a small gap between tiles
  const offsetX = 0.01; // Adjust as needed for the desired gap
  const offsetY = 0.01; // Adjust as needed for the desired gap
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;

  //   texture.offset.set(offsetX, offsetY);
  return (
    <>
      <Wall position={[1, 1, -20]} args={[40, 20, 1]} color={wallColor} />
      <Wall position={[-5, 1, 20]} args={[28, 20, 1]} color={wallColor} />
      <Wall
        position={[-18.5, 1, 0]}
        args={[40, 20, 1]}
        color={wallColor}
        rotation={[0, 1.57, 0]}
      />
      <Wall
        position={[20.5, 1, 0]}
        args={[40, 20, 1]}
        color={wallColor}
        rotation={[0, 1.57, 0]}
      />
      <mesh position={[1, -8.9, 0]} rotation={[1.57, 0, 1.57]}>
        <boxGeometry args={[39, 38, 0.25]} />
        <meshStandardMaterial
          attach="material"
          //   color="white"
          map={texture}
          //   offset={[offsetX, offsetY]}
          // repeat={[repeatX, repeatY]}
        />
      </mesh>
    </>
  );
};

export default CubeBox;
