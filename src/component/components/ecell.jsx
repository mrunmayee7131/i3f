import React from "react";
import ec from '../components/assets/E-Cell-IIT-BHU-Logo.webp';
import styles from './ecell.module.css'
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"



function Ecell(){
    return(
        <div>
            <Navbar></Navbar>
        {/* <h1>E-Cell IIT(BHU)</h1>
        <img src={ec} />
        <p><a href="" target="_blank">E-Cell IIT BHU (The Entrepreneurship Cell)</a> supports entrepreneurship through resources, mentorship, networking, and events like workshops, competitions, and speaker sessions and fosters the overall startup ecosystem in the institute.
<br></br>
It is an institute body run by students devoted to acting as a link between budding entrepreneurs and the existing startup ecosystem. It is a hub where all startups can meet, collaborate and innovate.</p> */}


<div class="py-20">
<h2 class="my-10 text-3xl text-center font-bold text-fuchsia-900 md:text-4xl dark:text-fuchsia">
          E-Cell IIT (BHU)
        </h2>
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
  
    <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div class="md:5/12 lg:w-1/2">
        <img
        class="content-center h-96 w-96"
          src={ec}
          alt="image"
          loading="lazy"
          width=""
          height=""
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        
        <p class="my-8 font-normal text-black-600 dark:text-gray-80">
        <a href="" target="_blank">E-Cell IIT BHU (The Entrepreneurship Cell)</a> supports entrepreneurship through resources, mentorship, networking, and events like workshops, competitions, and speaker sessions and fosters the overall startup ecosystem in the institute.
<br></br>
It is an institute body run by students devoted to acting as a link between budding entrepreneurs and the existing startup ecosystem. It is a hub where all startups can meet, collaborate and innovate.
        </p>

        <a
            href="https://www.ecelliitbhu.com/"
            target="_blank"
            class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
          >
            <span
              class="relative text-base font-semibold text-sky-600 dark:text-white"
              >Explore More</span
            >
        </a>
      </div>
    </div>
  </div>
</div>
                                    
<Footer></Footer>
        </div>

    )
}

export default Ecell;