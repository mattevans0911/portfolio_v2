import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import "./components/styles/app.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<About />} />

            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
