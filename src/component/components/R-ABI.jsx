import React from "react";
import styles from "./Rabi.module.css"
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"
import rabi from "./assets/rabi.webp"
import ank from "./assets/ank.webp"
import pras from "./assets/pras.webp"
import bio from "./assets/biotech.gif"
import cl from "./assets/clean.gif"
import food from "./assets/food.gif"
import farm from "./assets/farm.gif"
import ai from "./assets/ai.gif"
import ecom from "./assets/ecom.gif"


function Rabi(){
    return(
      <div>
<Navbar></Navbar>
<div class="py-16">
  <div class="container m-auto px-4 text-white-500 md:px-10 xl:px-8">
  <h2 class="my-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-fuchsia md:text-4xl">
  RKVY-RAFTAAR AGRI BUSINESS INCUBATOR (R-ABI)      </h2>
      <a href="https://rkvy-raftaariitbhu.org/" target="_blank"><img src={rabi} className={styles.rabiimg}/></a>
      <p class="my-10 font-normal text-black-600 dark:text-black-300 lg:mx-auto lg:w-8/12">
      The Rashtriya Krishi Vikas Yojna – Remunerative Approaches for Agriculture and Allied Sector Rejuvenation (RKVY-RAFTAAR) Agripreneurship is a scheme of the Ministry of Agriculture and Farmers’ Welfare (MoA&FW), Govt. of India aimed at strengthening infrastructure in agriculture and allied sector in order to promote agripreneurship and agribusiness by providing financial support and nurturing the incubation ecosystem. Ministry of Agriculture & Farmers’ Welfare, Government of India sanctioned to establish RKVY – RAFTAAR Agri-Business Incubator (R-ABI) at Indian Institute of Technology (BHU) Varanasi in January 2019.
      </p>
      <h3 class="my-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-black md:text-4xl">
      R-ABI: Incubation Programs
      </h3> 
      <p class="my-10 font-normal text-black-600 dark:text-black-300 lg:mx-auto lg:w-8/12">RKVY-RAFTAAR Agri-Business Incubator (R-ABI) is established in IIT(BHU) Varanasi in Jan 2019. The R-ABI aims to create a vibrant start-up ecosystem in the Eastern Uttar Pradesh region. The incubator is focusing on spreading awareness in youth, about farming as a fun and profitable business. Also leveraging Agri startups through training, coaching, mentoring & funding through various schemes of Govt of India.</p>
      </div>
      </div>
      <div class="container relative mx-auto px-4 text-gray-500 md:px-6 lg:px-80">
  <div class="grid gap-14 md:grid-cols-1 lg:grid-cols-2">
    <div class="group space-y-4 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-white-800 px-4 md:px-8 py-8 text-center md:py-12 lg:py-16 shadow-2xl shadow-gray-600/10 dark:shadow-none">
      <img
        class="mx-auto w-24"
        src={ank}
        alt="illustration"
        loading="lazy"
      />
      <h3 class="text-lg md:text-2xl font-semibold text-gray-800 dark:text-black">ANKURAN – Pre-Seed Stage</h3>
      <p class="text-left font-normal">
        <li class="list-disc">2-Months training program for farmers, students, and youth having innovative ideas</li>
        <li class="list-disc">Incubation support for product development</li>
        <li class="list-disc">Platform to launch products</li>
        <li class="list-disc">Grant-in-aid up to Rs. 5 Lakhs</li>
      </p>
    </div>
    <div class="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-white-800 px-4 md:px-8 py-8 text-center md:py-12 lg:py-16 shadow-2xl shadow-gray-600/10 dark:shadow-none">
      <img
        class="mx-auto w-24"
        src={pras}
        alt="illustration"
        loading="lazy"
      />
      <h3 class="text-lg md:text-2xl font-semibold text-gray-800 dark:text-black">PRASFUTAN – Seed Stage</h3>
      <p class="text-left font-normal">
        <li class="list-disc">2-Months residency for start-ups with the minimum viable product (MVP)</li>
        <li class="list-disc">Incubation support for scale-up of operations</li>
        <li class="list-disc">Market and investor linkages</li>
        <li class="list-disc">Grant-in-aid up to Rs. 25 Lakhs</li>
      </p>
    </div>
  </div>
</div>
<div class="py-20 px-10">
  <div class="xl:container">
    <div class="mb-16">
      <h2 class="mb-4 text-2xl text-center font-bold text-gray-800 dark:text-black md:text-4xl">
        Features
      </h2>
    </div>
    <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      <div class="group relative space-y-6 overflow-hidden">
        <img
          class="mx-auto h-40 w-40"
          src={bio}
          alt="woman"
          loading="lazy"
          width="28"
          height="28"
        />
        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 class="text-xl font-semibold dark:text-gray-700 text-black">Bio-Tech</h4>
            
          </div>
        
        </div>
        
      </div>
      <div class="group relative space-y-6 overflow-hidden">
        <img
          class="mx-auto h-40 w-40"
          src={cl}
          alt="woman"
          loading="lazy"
          width="28"
          height="28"
        />
        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 class="text-xl font-semibold dark:text-gray-700 text-black">Clean-Tech</h4>
            
          </div>
        
        </div>
        
      </div>
      <div class="group relative space-y-6 overflow-hidden">
        <img
          class="mx-auto h-40 w-40"
          src={farm}
          alt="woman"
          loading="lazy"
          width="28"
          height="28"
        />
        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 class="text-xl font-semibold dark:text-gray-700 text-black">Farm Machanziation</h4>
            
          </div>
        
        </div>
        
      </div>
      <div class="group relative space-y-6 overflow-hidden">
        <img
          class="mx-auto h-40 w-40"
          src={ai}
          alt="woman"
          loading="lazy"
          width="28"
          height="28"
        />
        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 class="text-xl font-semibold dark:text-gray-700 text-black">AI & Iot</h4>
            
          </div>
        
        </div>
        
      </div>
      <div class="group relative space-y-6 overflow-hidden">
        <img
          class="mx-auto h-40 w-40"
          src={food}
          alt="woman"
          loading="lazy"
          width="28"
          height="28"
        />
        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 class="text-xl font-semibold dark:text-gray-700 text-black">Food Tech</h4>
            
          </div>
        
        </div>
        
      </div>
      <div class="group relative space-y-6 overflow-hidden">
        <img
          class="mx-auto h-40 w-40"
          src={ecom}
          alt="woman"
          loading="lazy"
          width="28"
          height="28"
        />
        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 class="text-xl font-semibold dark:text-gray-700 text-black">E-Commerce</h4>
            
          </div>
        
        </div>
        
      </div>
      
    </div>
    
  </div>
</div>

<div class="mb-16 flex items-center justify-center">
  <a
    href="https://rkvy-raftaariitbhu.org/"
    target="_blank"
    class="relative flex h-12 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
  >
    <span class="relative flex items-center justify-center text-base font-semibold text-sky-600 dark:text-white">Explore more </span>
  </a>
</div>

      <Footer></Footer>
</div>
      )
    }
    
export default Rabi;