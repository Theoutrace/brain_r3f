import Image from "next/image";
import React from "react";

const TileCard = ({ image, title, setTile }) => {
  return (
    <Image
      src={image}
      alt=""
      width={200}
      height={200}
      onClick={() => setTile(image)}
    />
  );
};

export default TileCard;
