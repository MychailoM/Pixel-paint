import React, { useState } from "react";
import Picture from "./Picture";

const EditPicturePlace = function () {
  const [color, setColor] = useState("#ffffff");
  const [size, setSize] = useState(10); 

  const save = () => {
    console.log("Saved:", { color, size, num: size * size });
  };

  return (
    <div>
      <div>
        <button onClick={save}>Save</button>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="number"
          value={size}
          min="10"
          step={5}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>
      <Picture pixelsCount={size * size} width={size} color={color} />
    </div>
  );
};

export default EditPicturePlace;
