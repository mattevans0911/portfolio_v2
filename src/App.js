import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./app.scss";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <div>
        <Home />
        <div>Working</div>
      </div>
    </div>
  );
}

export default App;
