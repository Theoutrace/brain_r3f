import React, { useEffect, useState } from "react";

const Wall = ({ position, args, color, rotation }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Wall;
