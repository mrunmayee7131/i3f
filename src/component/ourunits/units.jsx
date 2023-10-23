import React,{useEffect,useState} from "react"
import "./units.css"
import grid1 from "../rotation/assets/NCL-IIT-BHU-Incubation-centre-1-e1636435335895.webp"
import grid2 from "../rotation/assets/cisco.png"
import grid3 from "../rotation/assets/download.jpeg"
import grid4 from "../rotation/assets/download.png"
import image from "./assests/logo2.jpg"
function Unit(){

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);  
    const imagee=document.getElementsByTagName("img");
    const handleScroll = () => {
      if (window.scrollY > 1350 && window.screen.width>500) {
         imagee[9].classList.add("img1");
         imagee[10].classList.add("img2");
         imagee[11].classList.add("img3");
         imagee[12].classList.add("img4");
      }else{
         imagee[9].classList.add("null2");
        imagee[9].classList.remove("img1");
        imagee[10].classList.add("null2");
        imagee[11].classList.add("null2");
        imagee[12].classList.add("null2");
        imagee[10].classList.remove("img2");
        imagee[11].classList.remove("img3");
        imagee[12].classList.remove("img4");
      }
    };

    return(
      <>
    <div className="back">
        <h1>Our Units</h1>
     <div className="unitimg">
     <div >
      <div >
     <img   src={image}/>
     </div>
     </div>

     <div>
      <div>
     <img   src={image}/>
     </div>
     </div>

     <div>
      <div>
     <img   src={image}/>
     </div>
     </div>

     <div>
      <div>
     <img   src={image}/>
     </div>
     </div>


    
     </div>
    </div>


<div className="back2">
  <h1>Our Units</h1>
<img  className="grid1" src={grid1}/>
<img   className="grid2" src={grid4}/>
<img   className="grid3" src={grid3}/>
<img   className="grid4"  src={grid2}/>

</div>
</>
    )
}
export default Unit;