// Import necessary libraries
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FogotPass from "./component/FogotPass";
// import SelectExample from "./component/Login";
import SuccessPass from "./component/SuccessPass";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuccessPass />} />
        <Route path="/fogotpass" element={<FogotPass />} />
      </Routes>
    </Router>
  );
};

export default App;
