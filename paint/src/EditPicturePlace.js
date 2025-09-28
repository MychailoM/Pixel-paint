import React, { useState, useEffect } from "react";
import Picture from "./Picture";
import './styles/EditPicturePlace.css';

const EditPicturePlace = ({ setPictureList, columns, setColumns, rows, setRows }) => {
  const [color, setColor] = useState("#ffffff");
  const [endPicture, setEndPicture] = useState([]);
  const [columnsInput, setColumnsInput] = useState(columns);
  const [rowsInput, setRowsInput] = useState(rows);

  useEffect(() => {
    const arr = [];
    let i = 0;
    while (i < rows * columns) {
      arr.push({ id: i, color: "#ffffff" });
      i++;
    }
    setEndPicture(arr);
  }, [rows, columns]);

  const changeColumns = (delta) => {
    let newValue = columns + delta;
    if (newValue < 1) newValue = 1;
    if (newValue > 35) newValue = 35;
    setColumns(newValue);
    setColumnsInput(newValue);
  };

  const changeRows = (delta) => {
    let newValue = rows + delta;
    if (newValue < 1) newValue = 1;
    if (newValue > 20) newValue = 20;
    setRows(newValue);
    setRowsInput(newValue);
  };

  const handleColumnsInput = (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 1;
    if (val < 1) val = 1;
    if (val > 35) val = 35;
    setColumns(val);
    setColumnsInput(val);
  };

  const handleRowsInput = (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 1;
    if (val < 1) val = 1;
    if (val > 20) val = 20;
    setRows(val);
    setRowsInput(val);
  };

  const save = () => {
    setPictureList(prev => [...prev, endPicture]);
  };

  return (
    <div className="editPictureContainer">
      <div className="controls">
        <button className="saveButton" onClick={save}>Save</button>
        <input className="colorInput" type="color" value={color} onChange={(e) => setColor(e.target.value)} />

        <div className="numberControl">
          <label>Columns:</label>
          <input type="text" value={columnsInput} onChange={handleColumnsInput} />
          <button onClick={() => changeColumns(5)}>+5</button>
          <button onClick={() => changeColumns(-5)}>-5</button>
        </div>

        <div className="numberControl">
          <label>Rows:</label>
          <input type="text" value={rowsInput} onChange={handleRowsInput} />
          <button onClick={() => changeRows(5)}>+5</button>
          <button onClick={() => changeRows(-5)}>-5</button>
        </div>
      </div>

      <Picture
        className='picture'
        pixelsCount={rows * columns}
        columns={columns}
        rows={rows}
        color={color}
        endPicture={endPicture}
        setEndPicture={setEndPicture}
      />
    </div>
  );
};

export default EditPicturePlace;
