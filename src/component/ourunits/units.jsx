import React,{useEffect,useState} from "react"
import "./units.css"
import grid1 from "../rotation/assets/NCL-IIT-BHU-Incubation-centre-1-e1636435335895.webp"
import grid2 from "../rotation/assets/cisco.png"
import grid3 from "../rotation/assets/download.jpeg"
import grid4 from "../rotation/assets/download.png"
import image1 from "./assests/Cisco logo.png"
import image4 from "../components/assets/E-Cell-IIT-BHU-Logo.webp"
import image2 from "../components/assets/NCL_-IIT__BHU__INCUBATION_CENTRE_1_-removebg-preview-removebg-preview.png"
import image3 from "./assests/LOGO.png"
import { Link } from 'react-router-dom';

function Unit(){

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);  
    // const imagee=document.getElementsByTagName("img");
    // const handleScroll = () => {
    //   if (window.scrollY > 1350 ) {
    //      imagee[5].classList.add("img1");
    //      imagee[6].classList.add("img2");
    //      imagee[7].classList.add("img3");
    //      imagee[8].classList.add("img4");
    //   }
    //   else{
    //     imagee[5].classList.add("null2");
    //     imagee[5].classList.remove("img1");
    //     imagee[6].classList.add("null2");
    //     imagee[6].classList.remove("img2");
    //     imagee[7].classList.remove("img3");
    //     imagee[7].classList.add("null2");
    //     imagee[8].classList.remove("img4");
    //     imagee[8].classList.add("null2");
    //    }
    // };

    return(
      <>
    <div className="back">
        <h1>Our Units</h1>
     <div className="unitimg">
     <div className="">
      <div >
      <Link target="_parent" to="/Cisco"><img   src={image1} className="img1"/></Link>
     </div>
     </div>

     <div>
      <div>
      <Link target="_parent" to="/NIIC"><img   src={image2} className="img2"/></Link>
     </div>
     </div>

     <div>
      <div>
      <Link target="_parent" to="/Rabi"><img   src={image3} className="img3"/></Link>
     </div>
     </div>

     <div>
      <div>
      <Link target="_parent" to="/ecell"><img   src={image4} className="img4"/></Link>
     </div>
     </div>


    
     </div>
    </div>


<div className="back2">
  <h1 className="text-4xl">Our Units</h1>
<Link target="_parent" to="/Cisco"> <img  className="grid1" src={grid1}/></Link>
<Link target="_parent" to="/NIIC"><img   className="grid2" src={grid4}/></Link>
<Link target="_parent" to="/Rabi"><img   className="grid3" src={grid3}/></Link>
<Link target="_parent" to="/ecell"><img   className="grid4"  src={grid2}/></Link>

</div>
</>
    )
}
export default Unit;