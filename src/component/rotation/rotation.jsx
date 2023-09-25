import React from "react";
import styles from "./rotation.module.css";
import img1 from "./assets/download.png"
import img2 from "./assets/download.jpeg"
import img3 from "./assets/cisco.png"
import img4 from "./assets/NCL-IIT-BHU-Incubation-centre-1-e1636435335895.webp"
function Rot(){
    return (
        <div className={styles.rot}>
         <div class={styles.gallery}>
         <img src={img1} alt="a dream catcher"/>
         <img src={img2} alt="a piano"/>
         <img src={img3} alt="a live concert"/>
         <img src={img4} alt="Paris"/>
        </div>
       </div>
    )
}
export default Rot;