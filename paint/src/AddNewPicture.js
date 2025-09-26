import React, { useState } from "react";
import EditPicturePlace from "./EditPicturePlace";

const AddNewPicture = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open && (
        <button onClick={() => setOpen(true)}>
          Додати нову картину
        </button>
      )}

      {open && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
            background: "#f9f9f9",
          }}
        >
          <button onClick={() => setOpen(false)}>Закрити</button>
          <EditPicturePlace/>
        </div>
      )}
    </div>
  );
};

export default AddNewPicture;     
