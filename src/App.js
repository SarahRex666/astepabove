import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Teachers from "./Teachers";
import Contacts from "./Contact";
import Offerings from "./Offerings";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/Offerings" element={<Offerings />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
