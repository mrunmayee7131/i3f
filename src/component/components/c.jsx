import React from 'react'
import IMG1 from '../carousel/assets/cisco.webp';
import IMG2 from '../carousel/assets/Dhruv.webp';
import IMG3 from '../carousel/assets/rabi.webp'
import './carousel.module.css';

function Ca() {  

   const data =[
    {
      IMGUrl:"../carousel/assets/cisco.webp",
      Details:" Workshop to guide graduate from product MVP to business soft launch.."
    },
    {
      IMGUrl:"../carousel/assets/cisco.webp",
      Details:" Workshop to guide graduate from product MVP to business soft launch.."
    },
    {
      IMGUrl:"../carousel/assets/cisco.webp",
      Details:" Workshop to guide graduate from product MVP to business soft launch.."
    },
    {
      IMGUrl:"../carousel/assets/cisco.webp",
      Details:" Workshop to guide graduate from product MVP to business soft launch.."
    }
   ]


    return (
      <div  class="py-12">
      <div class="xl:container m-auto px-1 text-gray-600 xl:px-1">
      <div class="mb-12 space-y-2 text-center">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-fuchsia-800">Current Happenings</h2>
      
    </div>
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


          {/* <div class="group p-6 sm:p-8 rounded-3xl border-4 bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-white-200 ">
            <div class="relative overflow-hidden rounded-xl">
              <img src={IMG1}
              alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
              Workshop to guide graduate from product MVP to business soft launch
              </h3>
            </div>
          </div> */}
           {data.forEach(element => {
             <div class="group p-6 sm:p-8 rounded-3xl border-4 bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-white-200 ">
             <div class="relative overflow-hidden rounded-xl">
               <img src={element.IMGUrl}
               alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
             </div>
             <div class="mt-6 relative">
               <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
                {element.Details}
               </h3>
             </div>
           </div>
           })}

          {/* <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none border-4 dark:border-gray-700 dark:bg-white-200 ">
            <div class="relative overflow-hidden rounded-xl">
              <img src={IMG2}
              alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
              Create successful startups & learn the basics of funding by Dr. Dhruv Nath
              </h3>
            
            </div>
            
          </div> */}

          {/* <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none border-4 dark:border-gray-700 dark:bg-white-200 ">
            <div class="relative overflow-hidden rounded-xl">
              <img src={IMG3}
              alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
              Insights of AOP, R-ABI
              </h3>
              
            </div>
            
          </div> */}

        </div>
      </div>
    </div>
                                        
    )
}

export default Ca;