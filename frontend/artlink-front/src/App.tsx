// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import EB from "../src/commponents/ViewExhibition/ExhibitionBox";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <EB />
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
