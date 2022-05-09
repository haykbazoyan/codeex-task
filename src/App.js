import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

export default App;
