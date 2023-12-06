import React,{useEffect,useState} from "react"
import styles from "./count.module.css"
import CountUpWithVisibility from '../components/rvc';
function Count(){
    return(
        <div className={styles.countbody}>
         <div className={styles.abc}>
            <h1 className="text-4xl pt-16 pb-16" >Achievements</h1>
            </div>
         <div className={styles.outerdiv}>
            <div >
            <div >
            <div  >
                <div ><h1  className={styles.countuptext}>  <CountUpWithVisibility start={0} end={130} duration={3} /></h1></div>
            </div>
            </div>
            <p className="text-xl font-semibold text-gray-500">Trained Start ups</p>
            </div>


            <div >
            <div >
            <div  >
                <div ><h1  className={styles.countuptext}>  <CountUpWithVisibility start={0} end={53} duration={3} /></h1></div>
            </div>
            </div>
            <p className="text-xl font-semibold text-gray-500">Incubated Start Ups</p>
            </div>


            <div >
            <div >
            <div  >
                <div ><h1  className={styles.countuptext}>  <CountUpWithVisibility start={0} end={230} duration={3} /></h1></div>
            </div>
            </div>
            <p className="text-xl font-semibold text-gray-500">Lakhs Fund Supported</p>
            </div>

            <div >
            <div >
            <div >
                <div ><h1  className={styles.countuptext1}>  <CountUpWithVisibility start={0} end={19} duration={3} /></h1></div>
            </div>
            </div>
            <p className="text-xl font-semibold text-gray-500">Patentable technologies</p>
            </div>
         </div>
        </div>
    )
}
export default Count;