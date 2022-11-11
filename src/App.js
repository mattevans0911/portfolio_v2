import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./app.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<About />} />

            <Route path="/projects" element={<Projects />} />

            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
