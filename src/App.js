import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
  const [isopen, setIsOpen] = useState(false);
  const isFirstRender = useRef(true);

  const [arabic, setArabic] = useState( false );
  
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("arabic"))) {
      setArabic(
        JSON.parse(localStorage.getItem("arabic"))
      );
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      localStorage.setItem("arabic", JSON.stringify(arabic));
    }
  }, [arabic]);
 
  const toggle = () => {
    setIsOpen(!isopen);
  };
  return (
    <Router>
      <div className="App">
        <Navbar setArabic={setArabic} arabic={arabic}  toggle={toggle}/>
        <Sidebar arabic={arabic}  isopen={isopen} toggle={toggle}/>
        <Routes>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
