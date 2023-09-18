
import React, { useEffect, useState }  from "react"
import Footer2 from "./component/footer2/footer";
import Navbar from "./component/header/navbar";
import "./App.css";
import Home from "./component/home/home"
import Units from "./component/units/units"
import Unit from "./component/ourunits/units"
import Count from "./component/count/count"
function App() {

 
  const [value,setvalue]=useState("Innovation");
  useEffect(() => {
    setTimeout(() => {
     (value==="Innovation"?setvalue("Incubation"):(value==="Incubation"?setvalue("Ideation"):setvalue("Innovation")))
    }, 1500);
  });
  return (
    <div className="app">
      <Navbar />
     
        {/* <div className="dululu">
        <h1>Center For <span>{value}</span></h1>
        </div> */}
         <Home />
         <Units />
         <Unit />
         <Count />
      <Footer2 />
    </div>
  )
}

export default App;
