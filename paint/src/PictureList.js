import React from "react";
import './styles/PictureList.css';

function PictureList({ pictureList, setPictureList, columns, rows }) {

  const handleDelete = (index) => {
    const updatedList = pictureList.filter((_, i) => i !== index);
    setPictureList(updatedList);
  };

  return (
    <div className="galleryContainer">
      {pictureList.map((picture, index) =>(
        <div className="galleryItem" key={index}>
          <div className="pixelsContainer" style={{width: columns * 30, height: rows * 30}}>
            {picture.map((pixel) => (
              <div className="galleryPixel" key={pixel.id} style={{backgroundColor: pixel.color}}></div>
            ))}
          </div>
          <button className="deleteButton" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PictureList;
