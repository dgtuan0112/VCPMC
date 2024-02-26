// Import necessary libraries
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FogotPass from "./component/FogotPass";
import SelectExample from "./component/Login";
import SuccessPass from "./component/SuccessPass";
import Userr from "./component/Userr";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userr />} />
        <Route path="/fogotpass" element={<FogotPass />} />

        <Route path="/success-pass" element={<SuccessPass />} />
      </Routes>
    </Router>
  );
};

export default App;
