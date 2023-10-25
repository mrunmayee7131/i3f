import React from "react";
import styles from "./navbar.module.css";
import logo2 from "./assets/logo2.jpg"
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div className={styles.navvdivv}>
    <nav className="flex basis-5 justify-between h-20 fixed ml-115 top-0 w-full z-10">
      <div className={styles.navimg}>
    <Link to="/"><img src={logo2} className={styles.image} /></Link>
    {/* <div className="text"> <p>Innovation Incubation Ideation </p></div> */}
   
    </div>
    <input type="checkbox" id="check" className="input"/>
    <label for="check" className={styles.checkbtn}>
      <i className="fas fa-bars"></i>
    </label>
   
  {/* <label class="logo">Innovation Incubation and Ideation</label> */}

    
    <ul >



    <li className={styles.nvbr}><Link className={styles.active} to="/">Home</Link></li>





      <li className={styles.nvbr}>
        <div className={styles.dropdown}><button className={styles.dropbtn}>ABOUT 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className={`${styles.dropdowncontent} ${styles.dropdowncontenta}`}>
      
      <Link to="/about" target="_parent" >About I3F</Link>
      <Link to="/team" target="_parent">About Team</Link>
      <Link to="/services" target="_parent">Our Services/Facilities</Link>
      
    </div>
    </div>
    </li>




    <li className={styles.nvbr}>
        <div className={styles.dropdown}><button className={styles.dropbtn}>UNITS 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className={styles.dropdowncontent}>
      <Link to="/NIIC" className={styles.sat} target="_parent"> NIIC 
      <i className="fa fa-caret-down"></i>
    <div className={styles.dropdowncontentcontent}>
      <Link to="/satellitecenter" target="_parent">Satellite Center</Link>
    </div>
    </Link>
    <Link to="/Rabi" target="_parent">R-ABI</Link> 
    <Link to="/Cisco" target="_parent"> Cisco Thing Qbator</Link>
    <Link to="/ecell" target="_parent"> E-Cell IIT BHU</Link>  
    </div>
    </div>
    </li>
     


    <li className={styles.nvbr}><Link className={styles.con} to="/contactus" target="_parent">Contact Us</Link></li>


   

    </ul>
   
  </nav>
  
  </div>



)};

export default Navbar;
