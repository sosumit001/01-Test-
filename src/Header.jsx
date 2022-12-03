import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"


const Header = () => {

const [isMClicked,setMClicked] = useState(false);



  const handleNavbar = (e) => {
    var menu = document.querySelector(".site-menu");




    const actionEle = document.querySelectorAll('.nav-action-ele');
    const listEle = document.querySelectorAll('li');

    if(!isMClicked)
    {
    
      
     menu.style = "--m-left:10%";
        listEle.forEach((e)=>{
          e.style = "--a-nav-width:140%; transform:scale(1)";
        })
     
      setMClicked(true);

    }
    else
    {
      
      
      menu.style = "--m-left:-10%";

        listEle.forEach((e)=>{
          e.style = "--a-nav-width:0%; transform:scale(0)";
        })
  

      setMClicked(false);
    }

   

    }
  
  

  
    return(
        <nav>
          <div onClick={handleNavbar} className="site-menu">
            Menu
          </div>
          <div className="site-logo nav-action-ele">
            <h1></h1>
          </div>
          <ul className="nav-action-ele">
            <li  onClick={handleNavbar}><Link to={"/"} >HOME</Link></li>
            <li  onClick={handleNavbar}><Link to={"/projects"} >PROJECTS</Link></li>
            <li onClick={handleNavbar}><Link to={"/contact"} >CONTACT</Link></li>
        
          </ul>
          <div id="pageType">
            
          </div>
      </nav>
    )
}

export default Header;