import React, { useEffect, useState }  from "react"
// // import background from "./assests/Background.jpg"
// import styles from "./home.module.css";
// // import logo from "./assests/design.png";
// import Rot from "../rotation/rotation"
import img from "../components/assets/I3F Logo-1.png"
// function Home(){
//     const [value,setvalue]=useState("Innovation");
//     useEffect(() => {
//       setTimeout(() => {
//        (value==="Innovation"?setvalue("Incubation"):(value==="Incubation"?setvalue("Ideation"):setvalue("Innovation")))
//       }, 1500);
//     });

   
//     return(

//         <div className={styles.home}>


//          <div className={styles.wrapper}>
//         <div className={styles.statictxts} >Centre for</div>
//         <ul className={styles.dynamictxts}>
//          <li><span>Innovation</span></li>
//          <li><span>Incubation</span></li>
//          <li><span>Ideation</span></li>
//         </ul>

//         </div>
        
//         <div className={styles.wrapmob}>
//         <h1>I3F Foundation</h1>
//         <img src={img} />
//         <p>IIT(BHU) Varanasi</p>
//         </div>


//         <div className={styles.logo}>
//          <Rot />
//         </div>
        
//          <div className={styles.below}>
//           <p>I3f Foundation</p>
//          {/* </div>
//          <div className="bbelow"> */}
//           <p>Indian Institute Of Technology (BHU) Varanasi</p>
//          {/* </div>
//          <div className="below"> */}
//           {/* <p>BHU Varanasi</p> */}
//          </div>
//          </div>

//     )
// }
// export default Home;
function Home(){
return(
<section class="bg-white  mt:36 h-1200">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7 mt-24">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black ">Innovation Incubation and Ideation Center</h1>
            <p class="max-w-2xl mb-6 ml-12 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> I3f Foundation , Indian Institute of Technology (BHU) Varanasi</p>
            <a href="#" class="inline-flex ml-12 items-center justify-center px-5 py-3 mr-3 text-base border bg-gray-400 font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Queries?
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black-900 border bg-black border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contact Us
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-3 lg:flex ">
            <img src={img} alt="mockup" className="ml-32 mt-24"/>
            
        </div>    
                
    </div>
    <hr/>   
</section>
)}
export default Home;