import React from "react";
import styles from "./current.module.css";
function Current(){
    return(
      <div className={styles.maincon}>
        <div className="mb-16">
            <h1>Current Happenings</h1>
            <div className={styles.container}>
  <div>
    <div className={styles.contentt}>
      {/* <h2>Jane Doe</h2> */}
      <span>
        Workshop to guide graduate from product MVP to business soft launch October 21,2021
      </span>
    </div>
  </div>
  <div>
    <div className={styles.contentt}>
      {/* <h2>Alex Smith</h2> */}
      <span>
      Create successful startups & learn the basics of funding by Dr. Dhruv Nath
October 21,2021
      </span>
    </div>
  </div>
  <div>
    <div className={styles.contentt}>
      {/* <h2>Emily New</h2> */}
      <span>
      Insights of AOP, R-ABI
October 21,2021
      </span>
    </div>
  </div>
  <div>
    <div className={styles.contentt}>
      {/* <h2>Lisa Boley</h2> */}
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam 
      </span>
    </div>
  </div>
</div>
        </div>
        </div>
    )
}
export default Current;