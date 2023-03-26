import React, { useEffect, useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  const [isDarkMood, setIsDarkMood]=useState(true);
  const darkMood =()=>{
    setIsDarkMood(!isDarkMood);
    localStorage.setItem("isDarkMood", "1");
  }
  
  useEffect(()=>{
    if(isDarkMood){
      const getColorStatus = localStorage.getItem("isDarkMood");
      if(getColorStatus === "1"){
        document.body.classList.add("dark")
      }
    }else{
      document.body.classList.remove("dark");
      localStorage.removeItem("isDarkMood")
    }
  },[isDarkMood]);
  
  return (
    <header className="header_container">
      <div className="header">
        <h1>Where in the world?</h1>
        <button className="header--toggle--button" onClick={darkMood}>
          <HiOutlineMoon className="moon"></HiOutlineMoon>
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
