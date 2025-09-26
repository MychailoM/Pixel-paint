import React, { useState, useEffect } from "react";
import './styles/Pixel.css'

let isDrawing = false;

const Pixel = function({ initialColor, selectedColor }) {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    
    const stopDrawing = () => {
      isDrawing = false;
    };

    window.addEventListener("mouseup", stopDrawing);
    window.addEventListener("touchend", stopDrawing);

    return () => {
      window.removeEventListener("mouseup", stopDrawing);
      window.removeEventListener("touchend", stopDrawing);
    };
  }, []);

  const paint = () => setColor(selectedColor);
  const erase = () => setColor("#ffffff");

  return (
    <div
      className="pixel"
      style={{ backgroundColor: color }}
      
      onMouseDown={(e) => {
        if (e.button === 0) { 
          isDrawing = true;
          paint();
        }
        if (e.button === 2) { 
          erase();
        }
      }}
      
      onMouseEnter={(e) => {
        if (isDrawing && e.buttons === 1) {
          paint();
        }
        if (e.buttons === 2) {
          erase();
        }
      }}
      
      onContextMenu={(e) => e.preventDefault()}
      
      onTouchStart={(e) => {
        e.preventDefault();
        paint();
      }}
      onTouchMove={(e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (element && element.classList.contains("pixel")) {
          element.style.backgroundColor = selectedColor;
        }
      }}
    ></div>
  );
};

export default Pixel;
