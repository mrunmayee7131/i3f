import React,{useEffect,useState} from "react"
import styles from "./count.module.css"
import CountUpWithVisibility from '../components/rvc';
function Count(){
    return(
        <div className={styles.countbody}>
         <div className={styles.abc}>
            <h1>Achievements</h1>
            </div>
         <div className={styles.outerdiv}>
            <div className={styles.innerdiv}>
            <div className={styles.box}>
            <div className={styles.content} >
                <div className={styles.count}><h1  className={styles.countuptext}>  <CountUpWithVisibility start={0} end={130} duration={3} /></h1></div>
            </div>
            </div>
            <p>Trained Start ups</p>
            </div>


            <div className={styles.innerdiv}>
            <div className={styles.box}>
            <div className={styles.content} >
                <div className={styles.count}><h1  className={styles.countuptext}>  <CountUpWithVisibility start={0} end={53} duration={3} /></h1></div>
            </div>
            </div>
            <p>Incubated Start Ups</p>
            </div>


            <div className={styles.innerdiv}>
            <div className={styles.box}>
            <div className={styles.content} >
                <div className={styles.count}><h1  className={styles.countuptext}>  <CountUpWithVisibility start={0} end={230} duration={3} /></h1></div>
            </div>
            </div>
            <p>Lakhs Fund Supported</p>
            </div>

            <div className={styles.innerdiv}>
            <div className={styles.box}>
            <div className={styles.content} >
                <div className={styles.count}><h1  className={styles.countuptext}>  <CountUpWithVisibility start={0} end={19} duration={3} /></h1></div>
            </div>
            </div>
            <p>Patentable technologies</p>
            </div>
         </div>
        </div>
    )
}
export default Count;