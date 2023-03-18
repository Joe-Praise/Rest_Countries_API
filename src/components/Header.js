import React from "react";
import { HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  const darkMood =()=>{
    document.body.classList.toggle("dark")
  }
  return (
    <div className="header_container">
      <div className="header">
        <h1>Where in the world?</h1>
        <button className="header--toggle--button" onClick={darkMood}>
          <HiOutlineMoon className="moon"></HiOutlineMoon>
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
