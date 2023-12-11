import React from "react";
import styles from "./Sace.module.css"
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"
function Sc(){
    return(
        <div >
            <Navbar />
            <div class="mb-10">
  <div class="container m-auto px-4 text-white-500 md:px-10 xl:px-8">
  <h2 class="my-10 text-center text-2xl font-bold text-fuchsia-800 dark:text-fuchsia md:text-4xl">
Satellite Centre      </h2>
      <p class="my-10 mx-auto font-normal text-black-600 dark:text-black-300 lg:mx-auto lg:w-8/12">
      The main establishment of this Centre is at IIT (BHU) and further its Satellite Centres are being developed at Singrauli for extending the benefit of this initiative operational as well as CSR and welfare areas of NCL. As per directive of Ministry of Corporate Affairs, NCL is supporting NIIC under its CSR from last 2 years. The main objectives of this Centre are as follows:<br></br><br></br>
      <li>1.To promote entrepreneurship among students and society</li>
<li>2.To create support system for Innovation-based enterprises/start-ups</li>
<li>3.To encourage technology transfer and commercialization</li>
<li>4.To sustain job creation and support “Make in India” Model</li>
<li>5.To forge a close linkage between new business & academia    R & D</li>
<li>6.To provide R & D support to SMEs of the region and business incubators    </li>
<h3 class="my-8 text-xl font-bold text-black-800" >Key initiatives taken by this Centre in last 2 years are as follows:</h3>
<li className="list-disc">Establishment of Khadi and Handloom Centre at Semuar village as Satellite Centre of NIIC</li>
<li className="list-disc">Establishment of “Food Tech-Park-Training & Development Centre” as Satellite Centre of NIIC at Birkunia village of Singrauli</li>
<li className="list-disc">Establishment of Drone Manufacturing and Rapid Prototyping Lab under satellite Centre of NIIC at NCL-HQ, Singrauli</li>
      </p>
      </div>
      </div>
        <Footer />
        </div>
    )
}

export default Sc;
