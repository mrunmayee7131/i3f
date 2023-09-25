import React from "react";
import styles from "./circle.module.css";
import Image from "./assests/logo2.jpg"
function Circle(){
    return(
        <div className={styles.box}>
          {/* <img className="i" src={Image} /> */}
          <div className={styles.content}>
            <img className={styles.i} src={Image} />
            <button>See More</button>
          </div>
        </div>
    )
}
export default Circle;