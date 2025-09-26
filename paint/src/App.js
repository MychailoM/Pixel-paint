import { useState } from "react";
import AddNewPicture from "./AddNewPicture";
import PictureList from "./PictureList";


function App() {
  const [pictureList, setPictureList] = useState([])

  return (
    <div className="App">
      <AddNewPicture/>
      <PictureList/>
    </div>
  );
}

export default App;       
