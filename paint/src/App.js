import { useState, useEffect } from "react";
import AddNewPicture from "./AddNewPicture";
import PictureList from "./PictureList";
import './styles/App.css';

function App() {
  const [pictureList, setPictureList] = useState([]);
  const [columns, setColumns] = useState(10);         
  const [rows, setRows] = useState(10);               

  // Завантажуємо з localStorage при старті
  useEffect(() => {
    const savedPictures = localStorage.getItem('pictureList');
    const savedColumns = localStorage.getItem('columns');
    const savedRows = localStorage.getItem('rows');

    if (savedPictures) setPictureList(JSON.parse(savedPictures));
    if (savedColumns) setColumns(parseInt(savedColumns));
    if (savedRows) setRows(parseInt(savedRows));
  }, []);

  useEffect(() => {
    localStorage.setItem('pictureList', JSON.stringify(pictureList));
  }, [pictureList]);

  useEffect(() => {
    localStorage.setItem('columns', columns);
  }, [columns]);

  useEffect(() => {
    localStorage.setItem('rows', rows);
  }, [rows]);

  return (
    <div className="appContainer">
      <AddNewPicture
        setPictureList={setPictureList} 
        columns={columns}
        setColumns={setColumns}
        rows={rows}
        setRows={setRows}
      />
      <PictureList pictureList={pictureList} setPictureList={setPictureList}  columns={columns} rows={rows} />
    </div>
  );
}

export default App;
