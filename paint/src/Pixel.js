import React, { useState } from "react";
import "./styles/Pixel.css";

const Pixel = ({ id, initialColor, selectedColor, onPaint }) => {
  const [color, setColor] = useState(initialColor);

  const paint = () => {
    setColor(selectedColor);
    onPaint(id, selectedColor);
  };

  return (
    <div
      id={id}
      className="pixelElement"
      style={{ backgroundColor: color }}
      onClick={paint}
    ></div>
  );
};

export default Pixel;
