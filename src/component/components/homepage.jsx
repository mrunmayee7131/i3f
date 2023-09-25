
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
function Homepage() {

 
  const [value,setvalue]=useState("Innovation");
  useEffect(() => {
    setTimeout(() => {
     (value==="Innovation"?setvalue("Incubation"):(value==="Incubation"?setvalue("Ideation"):setvalue("Innovation")))
    }, 1500);
  });
  return (
    <>
    <div className="app">
      <Navbar />
     
        {/* <div className="dululu">
        <h1>Center For <span>{value}</span></h1>
        </div> */}
         <Home />
         <Units />
         <Unit />
         <Count />
         <Current />
      <Footer2 />
      {/* <Circle /> */}
      {/* <Rot /> */}
    </div>
   
    </>
  )
}

export default Homepage;
