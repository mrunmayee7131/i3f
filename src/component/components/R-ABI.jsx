import React from "react";
import styles from "./Rabi.module.css"
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"
import rabi from "./assets/rabi.webp"
import ank from "./assets/ank.webp"
import pras from "./assets/pras.webp"
import clg from "./assets/Untitled design.png"

function Rabi(){
    return(
        <div className="rb">
        <Navbar></Navbar>
        <div class="py-16">
  <div class="container m-auto px-4 text-white-500 md:px-10 xl:px-8">
  <h2 class="my-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-fuchsia md:text-4xl">
  RKVY-RAFTAAR AGRI BUSINESS INCUBATOR (R-ABI)
      </h2>
      <a href="https://rkvy-raftaariitbhu.org/" target="_blank"><img src={rabi} className={styles.rabiimg}/></a>
      <p class="my-10 text-black-600 dark:text-black-300 lg:mx-auto lg:w-8/12">
      The Rashtriya Krishi Vikas Yojna – Remunerative Approaches for Agriculture and Allied Sector Rejuvenation (RKVY-RAFTAAR) Agripreneurship is a scheme of the Ministry of Agriculture and Farmers’ Welfare (MoA&FW), Govt. of India aimed at strengthening infrastructure in agriculture and allied sector in order to promote agripreneurship and agribusiness by providing financial support and nurturing the incubation ecosystem. Ministry of Agriculture & Farmers’ Welfare, Government of India sanctioned to establish <a href="https://rkvy-raftaariitbhu.org/" target="_blank"> RKVY – RAFTAAR Agri-Business Incubator (R-ABI)</a> at Indian Institute of Technology (BHU) Varanasi in January 2019.
      </p>
      <h3 class="my-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-black md:text-4xl">
      R-ABI: Incubation Programs
      </h3>
      <p class="my-10 text-black-600 dark:text-black-300 lg:mx-auto lg:w-8/12">RKVY-RAFTAAR Agri-Business Incubator (R-ABI) is established in IIT(BHU) Varanasi in Jan 2019. The R-ABI aims to create a vibrant start-up ecosystem in the Eastern Uttar Pradesh region. The incubator is focusing on spreading awareness in youth, about farming as a fun and profitable business. Also leveraging Agri startups through training, coaching, mentoring & funding through various schemes of Govt of India.</p>

      
  <div class="container relative m-auto px-10 text-gray-500 md:px-10">
    <div class="grid gap-10 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4">
    <div class="group space-y-6 border border-white dark:border-white rounded-3xl bg-white dark:bg-white px-8 py-12 text-center shadow-2xl shadow-white dark:shadow-none">
        </div>
      <div class="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-white-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src={ank}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">ANKURAN – Pre-Seed Stage</h3>
        <p class="text-left">
        <li class="list-disc">2-Months training program for farmers, students and youth having innovative ideas</li>
        <li class="list-disc">Incubation support for product development</li>
        <li class="list-disc">Platform to launch products</li>
        <li class="list-disc">Grant-in-aid up to Rs. 5 Lakhs</li>
        </p>
      </div>
      <div class="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-white-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src={pras}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">PRASFUTAN – Seed Stage</h3>
        <p class="text-left">
        <li class="list-disc">2-Months residency for start-ups with the minimum viable product (MVP)</li>
        <li class="list-disc">Incubation support for scale-up of operations</li>
        <li class="list-disc">Market and investor linkages</li>
        <li class="list-disc">Grant-in-aid up to Rs. 25 Lakhs</li>
        </p>
      </div>
    </div>
  </div>

  
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div class="md:5/12 lg:w-1/2 ">
        <img
          src={clg}
          alt="image"
          loading="lazy"
          width="500"
          height="5000"
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-black">
            Features
        </h2>
        <p class="my-8 text-gray-600 dark:text-gray-600">
        <li class="list-disc">Bio Tech</li>
        <li class="list-disc">Clean Tech</li>
        <li class="list-disc">Farm Machanziation</li>
        <li class="list-disc">AI & IoT</li>
        <li class="list-disc">Food Tech</li>
        <li class="list-disc">E-Commerce</li>
        </p>

        <a
            href="https://rkvy-raftaariitbhu.org/"
            target="_blank"
            class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
          >
            <span
              class="relative text-base font-semibold text-sky-600 dark:text-white"
              >Explore more</span
            >
        </a>
      </div>
    </div>
  </div>
                                    
                                    
      </div>
      </div>
        <Footer></Footer>
        </div>
    )
}

export default Rabi;
