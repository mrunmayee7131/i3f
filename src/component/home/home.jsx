import React, { useEffect, useState }  from "react"
// import background from "./assests/Background.jpg"
import styles from "./home.module.css";
// import logo from "./assests/design.png";
import Rot from "../rotation/rotation"
function Home(){
    const [value,setvalue]=useState("Innovation");
    useEffect(() => {
      setTimeout(() => {
       (value==="Innovation"?setvalue("Incubation"):(value==="Incubation"?setvalue("Ideation"):setvalue("Innovation")))
      }, 1500);
    });

   
    return(

        <div className={styles.home}>
         <div className={styles.wrapper}>
        <div className={styles.statictxts} >Centre for</div>
        <ul className={styles.dynamictxts}>
         <li><span>Innovation</span></li>
         <li><span>Incubation</span></li>
         <li><span>Ideation</span></li>
        </ul>

        </div>
        

        <div className={styles.logo}>
         <Rot />
        </div>
        
         <div className={styles.below}>
          <p>I3f Foundation</p>
         {/* </div>
         <div className="bbelow"> */}
          <p>Indian Institute Of Technology (BHU) Varanasi</p>
         {/* </div>
         <div className="below"> */}
          {/* <p>BHU Varanasi</p> */}
         </div>
         </div>




    )
}
export default Home;