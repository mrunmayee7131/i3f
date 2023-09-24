
import React, { useEffect, useState }  from "react"
import { BrowserRouter , Route,Routes} from 'react-router-dom';
// import Footer2 from "./component/footer2/footer";
// import Navbar from "./component/header/navbar";
import "./App.css";
// import Home from "./component/home/home"
// import Units from "./component/units/units"
// import Unit from "./component/ourunits/units"
// import Count from "./component/count/count"
// import Current from "./component/currenthappens/current"
 import Abti3f from "./components/AboutI3f"
import Homepage from "./homepage"
import Sc from "./components/SatelliteCentre"
import Cisco from "./components/Cisco"
import Ecell from "./components/ecell"
import Abtteam1 from "./components/AboutTeam1"
import Services from "./components/Services"
import Contact from "./components/Contact"
// import Rabi from "./components/R-ABI"
function App() {

 
  // const [value,setvalue]=useState("Innovation");
  // useEffect(() => {
  //   setTimeout(() => {
  //    (value==="Innovation"?setvalue("Incubation"):(value==="Incubation"?setvalue("Ideation"):setvalue("Innovation")))
  //   }, 1500);
  // });
  return (
    // <>
    // <div className="app">
    //   <Navbar />
     
    //     {/* <div className="dululu">
    //     <h1>Center For <span>{value}</span></h1>
    //     </div> */}
    //      <Home />
    //      <Units />
    //      <Unit />
    //      <Count />
    //      <Current />
    //   <Footer2 />
    // </div>
   
    // </>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="about" element={<Abti3f />} />
      <Route path="satellitecenter" element={<Sc />} />
      <Route path="Cisco" element={<Cisco />} />
      <Route path="Ecell" element={<Ecell />} />
      <Route path="team" element={<Abtteam1 />} />
      <Route path="services" element={<Services />} />
      <Route path="contactus" element={<Contact />} />

      </Routes>
  </BrowserRouter>
  )
}

export default App;
