import React from "react";
import "./rotation.css";
import img1 from "./assests/NCL-IIT-BHU-Incubation-centre-1-e1636435335895.webp"
import img2 from "./assests/download.jpeg"
import img3 from "./assests/download.png"
import img4 from "./assests/cisco.png"
function Rot(){
    return (
        <div className="rot">
         <div class="gallery">
         <img src={img1} alt="a dream catcher"/>
         <img src={img2} alt="a piano"/>
         <img src={img3} alt="a live concert"/>
         <img src={img4} alt="Paris"/>
        </div>
       </div>
    )
}
export default Rot;