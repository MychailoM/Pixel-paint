import React, { useState } from "react";
import "./styles/Pixel.css";

const Pixel = function ({ initialColor, selectedColor }) {
  const [color, setColor] = useState(initialColor);

  const paint = () => setColor(selectedColor);

  return (
    <div
      className="pixel"
      style={{ backgroundColor: color }}
      onClick={paint}
    ></div>
  );
};

export default Pixel;
