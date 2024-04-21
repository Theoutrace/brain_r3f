import React from "react";

const ColorCard = ({ color, setWallColor }) => {
  return (
    <div
      className={` p-2 w-full rounded-full`}
      onClick={() => setWallColor(color)}
      style={{ backgroundColor: color }}
    />
  );
};

export default ColorCard;
