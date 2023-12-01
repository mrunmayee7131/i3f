import React from "react";
import styles from './AboutI3f.module.css'
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"
import mis from "../components/assets/vision.gif"
import vis from "../components/assets/vis.gif"
import obj from "../components/assets/objectives.gif"
import ser from "../components/assets/services.gif"

function Abti3f(){
    return(
        <div className={styles.abi3}>

            <Navbar />
            <br></br>
<div class="py-16">
  <div class="xl:container m-auto px-6 text-black-600 dark:text-black-300 md:px-12 xl:px-6">
    <h2 class="mb-12 text-center text-2xl font-bold text-fuchsia-800 dark:text-fuchsia md:text-4xl">
      About I3F
    </h2>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper pb-6">
        <div class="swiper-slide !bg-transparent">
          <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
            <img
              class="mx-auto h-28 w-28 "
              src={mis}
              alt="user avatar"
              height="400"
              width="400"
              loading="lazy"
            />
        <h4 class="text-lg font-semibold leading-none">Our Mission</h4>
            <p>
              <span class="font-serif">"</span> Identifying, exploring, and developing regional competitiveness, enhancing links between universities and research institutions, and contributing to the growth and success of emerging technology businesses. <span class="font-serif">"</span>
            </p>
            <div>
            </div>
          </div>
        </div>

        <div class="swiper-slide !bg-transparent">
          <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
            <img
              class="mx-auto h-28 w-28 "
              src={vis}
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
        <h4 class="text-lg font-semibold leading-none">Our Vission</h4>
            <p>
              <span class="font-serif">"</span> Contributing to raising the GDP of our National Economy through Entrepreneurship, – initiating start-ups and supporting SMEs in the East UP region.<span class="font-serif">"</span>
            </p>
            <div>
            </div>
          </div>
        </div>

        <div class="swiper-slide !bg-transparent">
          <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
            <img
              class="mx-auto h-28 w-28 "
              src={obj}
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
        <h4 class="text-lg font-semibold leading-none">Our Objectives</h4>
            <p>
              <span class="font-serif"></span> I3F has been established with the following objectives-<br></br>
              <div class="text-center"> 
a. To promote entrepreneurship among students and society in the region<br></br>
b. To create a support system for Innovation-based enterprises/start-ups<br></br>
c. To encourage technology transfer and commercialization.<br></br>
d. To sustain job creation and support the “Make in India” Model<br></br>
e. To provide R & D support to SMEs of the region and business incubators<br></br>
f. To forge a close linkage between new business & academia R & D <br></br>
</div><span class="font-serif"></span>
            </p>
            <div>
            </div>

            <div class="swiper-slide !bg-transparent">
          <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
            <img
              class="mx-auto h-28 w-28 "
              src={ser}
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
        <h4 class="text-lg font-semibold leading-none">Our Services</h4>
            <p>
              <span class="font-serif"></span>
              <div class="text-center"> a. Technical due-diligence<br></br>
b. Training Programs<br></br>
c. Mentoring<br></br>
d. Legal advice<br></br>
e. IP Creation & Protection<br></br>
f. Funding Support<br></br>
g. Networking support<br></br></div><span class="font-serif"></span>
            </p>
            <div>
            </div>
          </div>
        </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</div>
                                    
        <Footer />
        </div>
        
    )
}

export default Abti3f;