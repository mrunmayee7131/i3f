import React from "react";
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"
import styles from "./contact.module.css"


function Contact(){
    return(
        < div className={styles.body}>
        <Navbar />
        <div className={styles.containercon}>
      <h1>Sign Up</h1>
      <form >
        <input
         
          type="text"
          placeholder="first name"
          
        />
         <input
          
          type="text"
          placeholder=" last name"
          
        />
         <input
         
          type="text"
          placeholder="mobile number"
         
        />
         <input
         
          type="text"
          placeholder="email"
         
        />
         <input className={styles.query}
         
         type="text"
         placeholder="query"
        
       />

        <button type={styles.submitcon}>Submit</button>
       
      </form>
    </div>

        <Footer />
        </div>
       
    )
}

export default Contact;