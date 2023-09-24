import React from "react";
import "./navbar.css";

const Navbar = () => {

  return (
    <div>
    <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo">Logo</label>
    <ul>
      <li className="nvbr"><a class="active" href="#">Home</a></li>
      <li className="nvbr">
        <div className="dropdown"><button class="dropbtn">ABOUT 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">About I3F</a>
      <a href="#">About Team</a>
      <a href="#">Our Services/Facilities</a>
    </div>
    </div>
    </li>
    <li className="nvbr">
        <div className="dropdown"><button class="dropbtn">UNITS 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">NIIC</a>
      
      <a href="#">R-ABI</a>
      <a href="#">Cisco ThinQbator</a>
      <a href="#">E-Cell , IIT(BHU)</a>
    </div>
    </div>
    </li>
     


      <li className="nvbr"><a href="#">Contact Us</a></li>
    </ul>
   
  </nav>
  
  </div>



)};

export default Navbar;