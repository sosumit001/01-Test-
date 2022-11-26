import React, { useState } from "react";

import "./Header.css"


const Header = () => {

const [isMClicked,setMClicked] = useState(false);



  const handleNavbar = (e) => {

    let menu = e.target;

    const actionEle = document.querySelectorAll('.nav-action-ele');
    const listEle = document.querySelectorAll('li');

    if(!isMClicked)
    {
      actionEle.forEach((e,k)=>{
        (k === 0)? e.style.top = "-100%":e.style.top = "-45%";
      })
      
     menu.style = "--m-left:10%";
        listEle.forEach((e)=>{
          e.style = "--a-nav-width:140%";
        })
     
      setMClicked(true);

    }
    else
    {
      actionEle.forEach((e,k)=>{
        (k === 0)? e.style.top = "0%":e.style.top = "100%";
      })
      
      menu.style = "--m-left:-10%";

        listEle.forEach((e)=>{
          e.style = "--a-nav-width:0%";
        })
  

      setMClicked(false);
    }

    }
  
    const handlePageLocation = (e) =>{

      const lg = "linear-gradient( to right,rgb(109, 176, 238),rgb(247, 202, 202))";
      
      let targetEle = e.target;
      let listEle = document.querySelectorAll('li');
      let targetURL = e.target.innerHTML;
      if(targetURL === "Home") targetURL = ""
      
      if(targetURL === `${targetURL}`) 
      window.open(`http://localhost:5173/${targetURL}`,"_self");

      
     listEle.forEach((e)=>{
      (e === targetEle)? e.style = `--${e.innerHTML}:${lg}`:
      e.style = `--${targetURL}: `
     })
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
            <li  onClick = {handlePageLocation}>Home</li>
            <li  onClick = {handlePageLocation}>Projects</li>
            <li  onClick = {handlePageLocation}>Contacts</li>
          </ul>
          
      </nav>
    )
}

export default Header;