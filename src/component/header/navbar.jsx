import React from "react";
import "./navbar.css";
import logo2 from "./assests/logo2.jpg"
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div>
    <nav className="flex basis-5 justify-between h-20 fixed top-0 w-full z-10">
      <div className="navimg">
    <img src={logo2} className="image"/>
    {/* <div className="text"> <p>Innovation Incubation Ideation </p></div> */}
   
    </div>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
  {/* <label class="logo">Innovation Incubation and Ideation</label> */}

    
    <ul >



    <li className="nvbr"><Link className="active" to="/">Home</Link></li>





      <li className="nvbr">
        <div className="dropdown"><button class="dropbtn">ABOUT 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      
      <Link to="/about" >About I3F</Link>
      <a href="#">Units</a>
      <a href="#">Our Services/Facilities</a>
      
    </div>
    </div>
    </li>




    <li className="nvbr">
        <div className="dropdown"><button class="dropbtn">UNITS 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#" className="sat"> NIIC 
      <i class="fa fa-caret-down"></i>
    <div class="dropdown-content-content">
      <Link to="/satellitecenter">Satellite Center</Link>
    </div>
    </a>
    <Link to="/Rabi">R-ABI</Link> 
    <a href="#" > Cisco Thing Qbator</a>
    <a href="#" > E-cell IIT BHU</a>  
    </div>
    </div>
    </li>
     


    <li className="nvbr"><a href="#">Contact Us</a></li>


   

    </ul>
   
  </nav>
  
  </div>



)};

export default Navbar;
