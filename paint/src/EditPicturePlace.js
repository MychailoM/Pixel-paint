import React, { useState } from "react";
import Picture from "./Picture";

const EditPicturePlace = function () {
  const [color, setColor] = useState("#ffffff");
  const [rows, setRows] = useState(10); 
  const [columns, setColumns] = useState(10); 

  const save = () => {
    console.log("Saved:", { color, columns, rows, num: rows * columns });
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
          value={columns}
          min="10"
          step={5}
          onChange={(e) => setColumns(Number(e.target.value))}
        />
        <input
          type="number"
          value={rows}
          min="10"
          step={5}
          onChange={(e) => setRows(Number(e.target.value))}
        />
      </div>
      <Picture pixelsCount={rows * columns}  columns={columns} rows={rows} color={color} />
    </div>
  );
};

export default EditPicturePlace;
