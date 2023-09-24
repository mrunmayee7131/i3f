import React, { useEffect, useState }  from "react"
import background from "./assests/Background.jpg"
import "./home.css";
import logo from "./assests/design.png";
import Rot from "../rotation/rotation"
function Home(){
    const [value,setvalue]=useState("Innovation");
    useEffect(() => {
      setTimeout(() => {
       (value==="Innovation"?setvalue("Incubation"):(value==="Incubation"?setvalue("Ideation"):setvalue("Innovation")))
      }, 1500);
    });

   
    return(

        <div className="home">
         <div className="wrapper">
        <div className=" static-txts" >Centre for</div>
        <ul className="dynamic-txts">
         <li><span>Innovation</span></li>
         <li><span>Incubation</span></li>
         <li><span>Ideation</span></li>
        </ul>

        </div>
        

        <div className="logo">
         <Rot />
        </div>
        
         <div className="below">
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