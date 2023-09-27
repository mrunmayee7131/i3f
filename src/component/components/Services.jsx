import React from "react";
import styles from './Services.module.css'
import svs from './assets/TIIC-Facilities.webp';
import lf from './assets/TIIC-Lab-Facilities.webp';
import of from './assets/TIIC-Facilities.webp';
import tdd from './assets/tdd.png';
import tp from './assets/training.jpg'
import ment from './assets/mentor.png'
import la from './assets/legal.png'
import ip from './assets/ip.webp'
import fund from './assets/fund.png'
import net from './assets/networking.png'
import Navbar from "../header/navbar";
import Footer from "../footer2/footer";



function Services(){
    return(
        <div className={styles.sevs}>
            <Navbar></Navbar>
        {/* <h1>Our Services/Facilities</h1>
        <p>I3F has collaborated with different organizations to provide following services</p>
        <img src={svs} />
        <h2>Office Facilities:</h2>
        <div className="off">
        <img src={of} className="of" />
        <li>Office Space</li>
<li />Computer Systems
<li />Printers
<li />Internet/WiFi
<li />Photocopier
<li />Conference Hall
<li />Training Hall
<li />Prototype and testing area
<li />Utilities area
<li>Power backup using two online UPS (5 & 6 KVA) and 15 KVA DG set</li>
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<h2>Lab Facilities</h2>

<img src={lf}  className="of"/>
<li />Laminar Airflow
<li />Lyophilizer
<li />BOD incubator
<li />CO2 incubator
<li />Centrifuge
<li />Spectrophotometer
<li />Vertical Autoclave
<li />Orbital Shakers
<li />Cold room
<li />Fermenters
<li />Chemical workstation
<li />Hot air Oven
<li />PCR
<li />Gel doc systems
<li />Gel Electrophoresis
<li />RI detector
<li />Deep Freezer
<li />Cell sonicator
<li />Polarizing Microscope */}


                                        <div class="py-10">
  <div class="xl:container m-auto px-4 text-gray-500 md:px-6">
    <div>
      <h2 class="mt-10 text-2xl font-bold text-fuchsia-700 dark:text-fuchs   ia md:text-4xl text-center ">
        Our Services/Facilities
      </h2>
    </div>
    <h2 className="mt-7 text-black text-xl">I3F has collaborated with different organizations to provide following services:</h2>
    <div
      class="mt-10 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-7"
    >
      <div class="group relative bg-white dark:bg-white-800 ">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src={tdd}
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-black-700 dark:text-black transition group-hover:text-primary"
            >
              Technical Due-Diligence
            </h5>
          </div>
          
        </div>
      </div>
      <div class="group relative bg-white dark:bg-white-800 ">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src={tp}
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-black-700 dark:text-black transition group-hover:text-primary"
            >
              Training Program
            </h5>
          </div>
          
        </div>
      </div>
      <div class="group relative bg-white dark:bg-white-800 ">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src={ment}
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-black-700 dark:text-black transition group-hover:text-primary"
            >
              Mentoring
            </h5>
          </div>
          
        </div>
      </div>
      <div class="group relative bg-white dark:bg-white-800 ">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src={la}
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-black-700 dark:text-black transition group-hover:text-primary"
            >
              Legal Advice
            </h5>
          </div>
          
        </div>
      </div>
      <div class="group relative bg-white dark:bg-white-800 ">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src={ip}
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-black-700 dark:text-black transition group-hover:text-primary"
            >
              IP Creation and Protection
            </h5>
          </div>
          
        </div>
      </div><div class="group relative bg-white dark:bg-white-800 ">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src={fund}
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-black-700 dark:text-black transition group-hover:text-primary"
            >
              Funding Support
            </h5>
          </div>
          
        </div>
      </div><div class="group relative bg-white dark:bg-white-800 ">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src={net}
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-black-700 dark:text-black transition group-hover:text-primary"
            >
              Networking Support
            </h5>
          </div>
          
        </div>
      </div>
  </div>
</div>
</div>


<div class="py-16">
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div class="md:5/12 lg:w-1/2">
        <img
          src={of}
          alt="image"
          loading="lazy"
          width=""
          height=""
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        <h2 class="text-3xl font-bold text-black-900 md:text-4xl dark:text-black">
          Office Facilities
        </h2>
        <p class="my-8 text-black-600 dark:text-black-300">
        <li>Office Space</li>
        <li>Computer Systems</li>
        <li>Printers</li>
        <li>Internet/WiFi</li>
        <li>Photocopier</li>
        <li>Conference Hall</li>
        <li>Training Hall</li>
        <li>Prototype and testing area</li>
        <li>Utilities area</li>
        <li>Power backup using two online UPS (5 & 6 KVA) and 15 KVA DG set</li>

        </p>

        
      </div>
    </div>
  </div>
</div>


<div class="py-16">
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div class="md:5/12 lg:w-1/2">
        <img
          src={lf}
          className="object-cover h-100 w-200"
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-black">
Lab Facilities        </h2>
        <p class="my-8 text-gray-600 dark:text-black-300">
       <li> Laminar Airflow</li>
       <li>Lyophilizer</li>
       <li>BOD incubator</li>
       <li>CO2 incubator</li>
       <li>Centrifuge</li>
       <li>Spectrophotometer</li>
       <li>Vertical Autoclave</li>
       <li>Orbital Shakers</li>
       <li>Cold room</li>
       <li>Fermenters</li>
       <li>Chemical workstation</li>
       <li>Hot air Oven</li>
       <li>PCR</li>
       <li>Gel doc systems</li>
       <li>Gel Electrophoresis</li>
       <li>RI detector</li>
       <li>Deep Freezer</li>
       <li>Cell sonicator</li>
       <li>Polarizing Microscope</li>


        </p>
        
          </div> 
        </div>
      </div>
    </div>
                                    
                                    
                                    
<Footer></Footer>
        </div>

    )
}

export default Services;