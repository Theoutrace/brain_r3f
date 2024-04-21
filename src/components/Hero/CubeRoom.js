"use client";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
// import Cube from "../common/Rooms/Cube";
import { OrbitControls } from "@react-three/drei";
import CubeBox from "../common/Rooms/CubeBox";
import ColorCard from "../custom/Card/ColorCard";
import WallColorData from "../../data/RoomData/WallColor.json";
import TilePathsData from "../../data/RoomData/TilePaths.json";
import TileCard from "../custom/Card/TileCard";

const CubeRoom = () => {
  const [wallColor, setWallColor] = useState("blue");
  const [floorTile, setFloorTile] = useState(TilePathsData?.tilePaths[1].path);

  return (
    <div className="bg-slate-400 p-4 h-full relative">
      <div className="absolute top-0 left-2 w-[200px] h-[500px] z-50 flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-center mt-4">Wall Color</h1>
        <div className=" grid grid-cols-3 gap-2 items-center justify-center ">
          {WallColorData?.wallColor?.map((item, index) => (
            <ColorCard
              key={index}
              color={item?.value}
              setWallColor={setWallColor}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-2 w-[200px] h-[500px] z-50 flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-center mt-4">Wall Color</h1>
        <div className=" grid grid-cols-1 gap-2 items-center justify-center ">
          {TilePathsData?.tilePaths?.map((item, index) => (
            <TileCard
              key={index}
              image={item?.path}
              title={item?.title}
              setTile={setFloorTile}
            />
          ))}
        </div>
      </div>
      <Canvas shadows camera={{ position: [10, 2, 50], fov: 50 }}>
        <OrbitControls />
        <pointLight
          position={[1, 20, 1]}
          color="white"
          intensity={500}
          castShadow
        />
        <ambientLight intensity={1} />
        {/* <ambientLight intensity={4} /> */}
        {/* <Cube scale={0.5} position={[0, -1, 0]} /> */}
        <CubeBox wallColor={wallColor} floorTile={floorTile} />
      </Canvas>
    </div>
  );
};

export default CubeRoom;
