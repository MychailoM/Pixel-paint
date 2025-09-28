import React, { useState } from "react";
import EditPicturePlace from "./EditPicturePlace";
import './styles/AddNewPicture.css';

const AddNewPicture = ({ setPictureList, columns, setColumns, rows, setRows }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="addPictureContainer">
      {!open && (
        <button className="openButton" onClick={() => setOpen(true)}>
          Додати нову картину
        </button>
      )}

      {open && (
        <div className="editWrapper">
          <button className="closeButton" onClick={() => setOpen(false)}>Закрити</button>
          <EditPicturePlace
            setPictureList={setPictureList}
            columns={columns}
            setColumns={setColumns}
            rows={rows}
            setRows={setRows}
          />
        </div>
      )}
    </div>
  );
};

export default AddNewPicture;
