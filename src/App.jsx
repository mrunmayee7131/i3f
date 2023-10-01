
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

//  import Abti3f from "./component/components/AboutI3f"
import Homepage from "./component/components/homepage"
import Sc from "./component/components/SatelliteCentre"
import Abtteam from "./component/components/AboutTeam1"
import Cisco from "./component/components/Cisco"
import Contact from "./component/components/Contact"
import Ecell from "./component/components/ecell"
import Events from "./component/components/Events"
import Newsletter from "./component/components/newsletter"
import Services from "./component/components/Services"
import Rabi from "./component/components/R-ABI"
import Ip from "./component/components/IncubationPolicy"
import Blog from "./component/components/blog"
import NIIC from "./component/components/NIIC"
// import Rabi from "./components/R-ABI"

 import Abt from "./component/components/AboutI3f"
// import Homepage from "./homepage"
// import Sc from "./components/SatelliteCentre"
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
      <Route path="about" element={<Abt />} />
      <Route path="satellitecenter" element={<Sc />} />
      <Route path="Rabi" element={<Rabi />} />
      <Route path="team" element={<Abtteam />} />
      <Route path="Cisco" element={<Cisco />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="Ecell" element={<Ecell />} />
      <Route path="Events" element={<Events />} />
      <Route path="Services" element={<Services />} />
      <Route path="Ip" element={<Ip />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="NIIC" element={<NIIC />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
