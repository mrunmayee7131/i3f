import React from "react";
import styles from './AboutTeam1.module.css';
import pk from './assets/director_pkjain.webp';
import ch from './assets/Dr.-P.-Chanak-1.webp';
import sg from './assets/Dr.-Shishir-Gaur-1.webp';
import sk from './assets/Dr.-Shyam-Kamal.webp';
import rs from './assets/Prof.-R.-S.-Singh-1.webp';
import rt from './assets/rajnesh_tyagi.webp';
import Navbar from "../header/navbar";
import Footer from "../footer2/footer";
function Abtteam1(){
    return(
      <div>
          <Navbar />
        <div className={styles.abtt}>
            
          <div class="bg-white-50 dark:bg-white-800 py-20">
  <div class="container mx-auto px-6 md:px-12 xl:px-32">
    <div class="mb-16">
      <h2 class="mt-8 mb-4 text-center text-2xl font-bold text-gray-800 dark:text-fuchsia-800 md:text-4xl">
        Managing Commitee
      </h2>
      <p class="text-gray-600 dark:text-gray-400 lg:mx-auto lg:w-8/12">
      "Meet our dedicated managing committee, a group of visionary leaders committed to steering our organization towards excellence and innovation."      </p>
    </div>
    <div class="grid items-center gap-12 md:grid-cols-3">
      
      <div class="space-y-4 text-center">
        <img
          class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
          src={pk}
          alt="woman"
          loading="lazy"
          width="1000"
          height="667"
        />
        <div>
          <h4 class="text-2xl text-gray-700 dark:text-black">Prof. P. K. Jain</h4>
          <span class="block text-sm text-gray-500">Director, IIT (BHU)</span>
        </div>
      </div>
      <div class="space-y-4 text-center">
        <img
          class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
          src={rt}
          alt="woman"
          loading="lazy"
          width="1000"
          height="667"
        />
        
        <div>
          <h4 class="text-2xl text-gray-700 dark:text-black">Prof. Rajnesh Tyagi</h4>
          <span class="block text-sm text-gray-500">Director, I3F, IIT (BHU) Varanasi</span>
        </div>
      </div>
      <div class="space-y-4 text-center">
        <img
          class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
          src={rs}
          alt="woman"
          loading="lazy"
          width="1000"
          height="667"
        />
        
        <div>
          <h4 class="text-2xl text-gray-700 dark:text-black">Prof. R. S. Singh</h4>
          <span class="block text-sm text-gray-500">Member</span>
          <span class="block text-sm text-gray-500">Dept. of Chemical Engineering, IIT (BHU) Varanasi</span>
        </div>
      </div>
      <div class="space-y-4 text-center">
        <img
          class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
          src={sg}
          alt="woman"
          loading="lazy"
          width="1000"
          height="667"
        />
        <div>
          <h4 class="text-2xl text-gray-700 dark:text-black">Dr. Shishir Gaur</h4>
          <span class="block text-sm text-gray-500">Member</span>
          <span class="block text-sm text-gray-500">Dept. of Civil Engineering, IIT (BHU) Varanasi

</span>
        </div>
      </div>
      <div class="space-y-4 text-center">
        <img
          class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
          src={sk}
          alt="woman"
          loading="lazy"
          width="1000"
          height="667"
        />
        <div>
          <h4 class="text-2xl text-gray-700 dark:text-black">Dr. Shyam Kamal</h4>
          <span class="block text-sm text-gray-500">Member</span>
          <span class="block text-sm text-gray-500">Dept. of Electrical Engineering, IIT (BHU) Varanasi</span>
        </div>
      </div>
      <div class="space-y-4 text-center">
        <img
          class="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
          src={ch}
          alt="woman"
          loading="lazy"
          width="1000"
          height="667"
        />
        <div>
          <h4 class="text-2xl text-gray-700 dark:text-black">Dr. Prasenjit Chanak</h4>
          <span class="block text-sm text-gray-500">Member</span>
          <span class="block text-sm text-gray-500">Dept. of Computer Science & Engineering, IIT (BHU) Varanasi</span>
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
    
export default Abtteam1;




