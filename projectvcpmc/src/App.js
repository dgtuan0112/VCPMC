// Import necessary libraries
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import FogotPass from "./component/FogotPass";
import SelectExample from "./component/Login";
import SuccessPass from "./component/SuccessPass";
import Userr from "./component/Userr";
import Record from "./component/Record";
import Manage from "./component/Manage";
import Playlist from "./component/Playlist";
import Calendarr from "./component/Calendarr";
import RecordCard from "./component/RecordCard";
import Playlistvideo from "./component/Playlistvideo";
import AddManage from "./component/AddManage";
import DetailManage from "./component/DetailManage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DetailManage />} />
        {/* <Route path="/" element={<SelectExample />} /> */}
        <Route path="/addmanage" element={<AddManage />} />

        <Route path="/" element={<SelectExample />} />
        <Route path="/fogotpass" element={<FogotPass />} />
        <Route path="/success-pass" element={<SuccessPass />} />

        <Route path="/userr" element={<Userr />} />

        <Route path="/record" element={<Record />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlistvideo" element={<Playlistvideo />} />
        <Route path="/calendarr" element={<Calendarr />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/recordcard" element={<RecordCard />} />

        {/* <Route path="/fogotpass" element={<FogotPass />} />

        <Routes path="/success-pass" element={<SuccessPass />} /> */}
      </Routes>
    </Router>
  );
  //   {/* <Router>
  // <Routes>
  //   <Route path="/" element={<Userr />} />
  //   <Route path="/record" element={<Record />} />
  //   <Route path="/manage" element={<Manage />} />
  //   <Route path="/playlist" element={<Playlist />} />
  // </Routes>
  // </Router> */}
};

export default App;
