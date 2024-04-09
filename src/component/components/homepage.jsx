
import React, { useEffect, useState }  from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer2 from "../footer2/footer";
import Navbar from "../header/navbar";
import "../../App.css";
import Home from "../home/home";
import Units from "../units/units"
import Unit from "../ourunits/units"
import Count from "../count/count"
import Current from "../currenthappens/current"
import Abt from "../components/AboutI3f"
// import Circle from "./component/leftimage/circle"
// import Rot from "./component/rotation/rotation"
import Ca from "../carousel/carousel"

function Homepage() {

 

  return (
    <>
    <div className="app">
    <Navbar />
         {/* <Home /> */}
         
         <Units />
         
         <Unit />
         {/* <Count /> */}
         {/* <Current /> */}
      
          {/* <Ca /> */}
        
         <Ca />
      <Footer2 />
    
      
      {/* <Rot /> */}
     
    </div>
   
    </>
  )
}

export default Homepage;

