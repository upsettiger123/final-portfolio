import "./App.css";
import projectData from "./assets/project-data.json";
import sketches from "./assets/sketch.json";
import Personas from "./components/Personas.js";
import Home from "./components/Home.js";
import Delight from "./components/Delight.js";
import Hike from "./components/Hike.js";
import Hack from "./components/Hack.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
projectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.img;
});

sketches.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.img;
});
/* ############################################################## */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home projectData={projectData} />}></Route>
          <Route path="personas" element={<Personas />} />
          <Route path="delight" element={<Delight sketches={sketches}/>} />
          <Route path="hike" element={<Hike />} />
          <Route path="hack" element={<Hack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
