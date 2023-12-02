import React from "react";
import styles from './Cisco.module.css';
import cis from './assets/Cisco-logo-1.webp';
import ai from './assets/iot.png';
import ml from './assets/ml.jpg';
import eng from './assets/eng.jpg';
import hack from './assets/hack.png';
import work from './assets/work.png';
import web from './assets/web.png';
import intern from './assets/intern.png'
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"

// import cis from './images/Cisco-logo-1.webp'


function Cisco(){
    return(
        <div className={styles.cb}>
            <Navbar></Navbar>
        

<div class="py-16">
  <div class="container m-auto px-4 text-white-500 md:px-10 xl:px-8">
  <h2 class="my-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-fuchsia md:text-4xl">
  Cisco thingQbator, IIT (BHU)
      </h2>
      <a href="https://thingqbator.nasscomfoundation.org/" target="_blank"><img src={cis} className={styles.cisimg}/></a>
      <p class="my-10 font-normal text-black-600 dark:text-black-300 lg:mx-auto lg:w-8/12">
      Since May 2018, as a part of a CSR initiative, Cisco Systems along with NASSCOM Foundation has established a <a href="https://thingqbator.nasscomfoundation.org/" target="_blank" className="text font-normal">Cisco thingQbator</a> at IIT (BHU) Varanasi. This AI and IoT-based makerspace program help to accelerate innovation and entrepreneurship among the student community.
      </p>
      <h3 class="my-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-black md:text-4xl">
  Focus Areas
      </h3>
    <div class="mx-auto grid gap-5 md:w-3/4 lg:w-full lg:grid-cols-3">
      <div class="border border-white-100 dark:border-white-700 rounded-3xl bg-white dark:bg-white-800 px-8 pt-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-25">
        <div class="mb-2 space-y-2">
          <h3 class="text-2xl text-center  font-semibold text-gray-800 dark:text-black">AI & IoT</h3>
        </div>
        <img
          src={ai}
          class="ml-12 mb-6 w-2/3"
          alt="illustration"
          loading="lazy"
          width="900"
          height="600"
        />
      </div>
      <div class="border border-white-100 dark:border-white-700 rounded-3xl bg-white dark:bg-white-800 px-8 pt-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-25">
        <div class="mb-2 space-y-4">
          <h3 class="text-2xl text-center font-semibold text-gray-800 dark:text-black">Machine Learning</h3>
        </div>
        <img
          src={ml}
          class="ml-12 mb-6 w-2/3"
          alt="illustration"
          loading="lazy"
          width="900"
          height="600"
        />
      </div>
      <div class="border border-white-100 dark:border-white-700 rounded-3xl bg-white dark:bg-white-800 px-8 pt-12 shadow-2xl shadow-gray-600/10 dark:shadow-none sm:px-12 lg:px-25">
        <div class="mb-2 space-y-4">
          <h3 class="text-2xl text-center font-semibold text-gray-800 dark:text-black">Engineering</h3>
        </div>
        <img
          src={eng}
          class="ml-12 mb-6 w-2/3"
          alt="illustration"
          loading="lazy"
          width="900"
          height="600"
        />
      </div>
  </div>
  </div>
</div>



<div class="relative py-16">
  <div class="container relative m-auto px-6 text-black-500 md:px-20">
  <h2 class="mb-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-black md:text-4xl">
  Programs
      </h2>
    <div class="grid gap-10 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-2">
      <div class="group space-y-3 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-white-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src={hack}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">Hackathons</h3>
        <p className="font-normal text-justify">
        Hackathons are 24-hr programs (single sprint) in which students and budding entrepreneurs are given a chance to build software/hardware to showcase their competency on a problem statement to develop a solution that best mitigates a real-world challenge.
Till now 5 Hackathons have been successfully organized and the winners were awarded.
        </p>
        
      </div>
      <div class="group space-y-3 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-white-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src={work}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">Workshops</h3>
        <p className="font-normal text-justify">
        Workshops on AI, IoT, ML, Blockchain and other future technologies are conducted from time to time. Industrial and academic experts from these domains are invited and students get hands-on training and mentoring.

        </p>
        
      </div>
      <div class="group space-y-3 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-white-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src={web}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">Webinars</h3>
        <p className="font-normal text-justify">
        Webinars are conducted by IIT-BHU Alums, Technopreneurs, Senior executives of MNCs, Venture capitalists on various technical and business-related sessions.
        </p>
        
      </div>
      <div class="group space-y-3 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-white-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24"
          src={intern}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">thingQbator Internship Programs</h3>
        <p className="font-normal text-justify">
        It is a virtual creative learning program where university students engage in problem-solving and building solutions. The Design Thinking Process is applied, and the program is broken into three tracks, based on various stages at which students’ projects are. These tracks are Learning Track, Project Track, and Startup Track.
        </p>
        
      </div>
    </div>
    <h2 class="my-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-black md:text-4xl">
  Facilities
      </h2>
    <p class="my-10 font-normal text-center text-black-600 dark:text-black-300 lg:mx-auto lg:w-8/12">
<li>Makerspace Network</li>
<li>Local Server</li>
<li>Webex Teams</li>
<li>Edge Teams</li>
<li>Edge Routers</li>
<li>IoT Platforms</li>
<li>Cloud infra</li>
<li>Development Boards</li>
<li>Sensors & Actuators Components</li>
<li>3D Printing</li>
<li>Cisco Sparkboard</li>

      </p>
  </div>
</div>
                                                          
<Footer></Footer>
        </div>
    )
}

export default Cisco;