import React from "react";
import Pixel from "./Pixel";
import './styles/Picture.css'

const Picture = function ({ pixelsCount, color, width }) {
  const picture = [];
  let i = 0;

  while (i < pixelsCount) {
    picture.push(i);
    i++;
  }

  return (
    <div style={{width: width * 22}} className="picture">
      {picture.map((val, i) => (
        <Pixel
          key={i}
          initialColor="#ffffff"
          selectedColor={color}
        />
      ))}
    </div>
  );
};

export default Picture;
