import React from "react";
import styles from "./navbar.module.css";
import logo2 from "./assets/logo2.jpg"
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div>
    <nav className="flex basis-5 justify-between h-20 fixed top-0 w-full z-10">
      <div className={styles.navimg}>
    <img src={logo2} className={styles.image}/>
    {/* <div className="text"> <p>Innovation Incubation Ideation </p></div> */}
   
    </div>
    <input type="checkbox" id={styles.check} />
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
    <div className={styles.dropdowncontent}>
      
      <Link to="/about" >About I3F</Link>
      <Link to="/team">About Team</Link>
      <Link to="/services">Our Services/Facilities</Link>
      
    </div>
    </div>
    </li>




    <li className={styles.nvbr}>
        <div className={styles.dropdown}><button className={styles.dropbtn}>UNITS 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className={styles.dropdowncontent}>
      <a href="#" className={styles.sat}> NIIC 
      <i className="fa fa-caret-down"></i>
    <div className={styles.dropdowncontentcontent}>
      <Link to="/satellitecenter">Satellite Center</Link>
    </div>
    </a>
    <Link to="/Rabi">R-ABI</Link> 
    <Link to="/Cisco" > Cisco Thing Qbator</Link>
    <Link to="/ecell" > E-cell IIT BHU</Link>  
    </div>
    </div>
    </li>
     


    <li className={styles.nvbr}><Link to="/contactus">Contact Us</Link></li>


   

    </ul>
   
  </nav>
  
  </div>



)};

export default Navbar;
