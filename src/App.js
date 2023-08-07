import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage.js";
import TestPage1 from "./TestPage1.js";
import TestPage2 from "./TestPage2.js";
import Nav from "./Nav.js";
import "./styles.css";
// import WebPlayback from "./WebPlayback.js"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route path="/TestPage1" element={<TestPage1 />} />
        <Route path="/TestPage2" element={<TestPage2 />} />
        {/* <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/WebPlayback" element={<WebPlayback />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
