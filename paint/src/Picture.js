import React from "react";
import Pixel from "./Pixel";
import "./styles/Picture.css";

const Picture = ({ pixelsCount, color, columns, rows, endPicture, setEndPicture }) => {
  if (endPicture.length === 0) {
    let i = 0;
    const arr = [];
    while (i < pixelsCount) {
      arr.push({ id: i, color: "#ffffff" });
      i++;
    }
    setEndPicture(arr);
  }

  const handlePaint = (id, pixelColor) => {
    setEndPicture(prev =>
      prev.map(p => p.id === id ? { ...p, color: pixelColor } : p)
    );
  };

  return (
    <div className="pictureContainer" style={{ width: columns * 32, height: rows * 32 }}>
      {endPicture.map(p => (
        <Pixel
          key={p.id}
          id={p.id}
          initialColor={p.color}
          selectedColor={color}
          onPaint={handlePaint}
        />
      ))}
    </div>
  );
};

export default Picture;
