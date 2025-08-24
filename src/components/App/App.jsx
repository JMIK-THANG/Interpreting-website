import React from "react";
import {Routes, Route} from "react-router-dom"; 
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
const App = () => {
  return (
    <div className="page">
      <div className="main">
        <Header/>
        <div className="main">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="services" element={<Main/>}/>
            <Route path="contact" element={<Main/>}/>
          </Routes>
        </div>
        <Main/>
      </div>
    </div>
  );
};

export default App;
