import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import UK from "../media/uk.svg"
import SA from "../media/sa.svg"

function Navbar({ toggle, isopen, setArabic, arabic }) {
  return (
    <div>
      <nav
        className="navbar navbar-expand navbar-dark nav_class "
        style={{ background: "#1c2a4a" }}
      >
        <a className="navbar-brand" href="/">
          Model OIC
        </a>
        <img className="navbar_logo" src="/moiclogo.png" alt="" />
        <div style={{ display:"flex" , flexDirection:"flex-end"}}>
         
        </div>
        <div >
        <div style={{marginLeft:"20px"}} className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            
              {arabic ? "اختر اللغة" : "  Select Language"}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item"  onClick={() => setArabic(false)}>  {arabic ? "إنجليزي" : " English"} <img alt="UK" className="language_flag" style={{ marginLeft : arabic ? "20px" : "15px"}} src={UK}></img>  </button>
              <button className="dropdown-item" onClick={() => setArabic(true)}>  {arabic ? "عربي" : "  Arabic"} <img alt="SA" className="language_flag" style={{ marginLeft : arabic ? "30px" : "20px"} } src={SA}></img></button>
            
            </div>
          </div>  </div> 
       
        
        <div className="nav-item" onClick={toggle}>
          
          <FaBars
            style={{ display: isopen ? "none" : "flex" }}
            className="MobileIcon"
          ></FaBars>
          
          
        </div>
      
        

      </nav>
      
    </div>
  );
}

export default Navbar;
