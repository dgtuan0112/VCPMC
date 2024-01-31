// Import necessary libraries
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FogotPass from "./component/FogotPass";
import SelectExample from "./component/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectExample />} />
        <Route path="/fogotpass" element={<FogotPass />} />
      </Routes>
    </Router>
  );
};

export default App;
