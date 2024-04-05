import React,{useEffect,useState} from "react"
import styles from "./count.module.css"
import CountUpWithVisibility from '../components/rvc';
import Company from "../../component/components/assets/company__1_-removebg-preview.png";
import Business from "../components/assets/business (3).png"
import Funding from "../components/assets/png/001-funding.png"
import Patent from "../components/assets/patent.png"
function Count(){
    return(
        <div className={styles.countbody}>
         <div className={styles.abc}>
            <h1 className="text-4xl pt-16 pb-16" >Achievements</h1>
            </div>
         <div className={styles.outerdiv}>
            <div >
            <div  className="flex flex-col items-center">
                <div>
                <img src={Company} width={100} className="mix-blend-screen"/>
                </div>
            
            <div  >
                <div ><h1  className={styles.countuptext}>130 +</h1></div>
              
            </div>
            <p className="text-xl font-light text-gray-300">Trained Start ups</p>
            </div>
          
            </div>


            <div >
            <div className="flex flex-col items-center" >
            <img src={Business} width={100} className="mix-blend-screen"/>
            <div  >
                <div ><h1  className={styles.countuptext}>53 +</h1></div>
            </div>
            <p className="text-xl font-light text-gray-300">Incubated Start Ups</p>
            </div>
         
            </div>


            <div >
            <div className="flex flex-col items-center">
            <img src={Funding} width={100} className="mix-blend-screen"/>
            <div  >
                <div ><h1  className={styles.countuptext}>230 +</h1></div>
            </div>
            <p className="text-xl font-light text-gray-300">Lakhs Fund Supported</p>
            </div>
          
            </div>

            <div >
            <div className="flex flex-col items-center">
            <img src={Patent} width={100} className="mix-blend-screen"/>
            <div >
                <div ><h1  className={styles.countuptext1}> 19 +</h1></div>
            </div>
            <p className="text-xl font-light text-gray-300">Patentable technologies</p>
            </div>
           
            </div>
         </div>
        </div>
    )
}
export default Count;