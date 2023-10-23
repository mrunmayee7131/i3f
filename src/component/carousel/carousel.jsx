// import IMG1 from '../carousel/assets/cisco.webp';
// import IMG2 from '../carousel/assets/Dhruv.webp';
import React from 'react'
import IMG1 from '../carousel/assets/cisco.webp';
import IMG2 from '../carousel/assets/Dhruv.webp';



function carousel() {  
    return (
      <div  class="py-12">
      <div class="xl:container m-auto px-6 text-gray-600 xl:px-1">
      <div class="mb-12 space-y-2 text-center">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-fuchsia-800">Current Happenings</h2>
      
    </div>
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div class="group p-6 sm:p-8 rounded-3xl  bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-white-200 ">
            <div class="relative overflow-hidden rounded-xl">
              <img src={IMG1}
              alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
              Workshop to guide graduate from product MVP to business soft launch
              </h3>
              
            </div>
            
          </div>
          <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none  dark:border-gray-700 dark:bg-white-200 ">
            <div class="relative overflow-hidden rounded-xl">
              <img src={IMG2}
              alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
              Create successful startups & learn the basics of funding by Dr. Dhruv Nath
              </h3>
              
            </div>
            
          </div>
          <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none  dark:border-gray-700 dark:bg-white-200 ">
            <div class="relative overflow-hidden rounded-xl">
              <img src={IMG2}
              alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
            </div>
            <div class="mt-6 relative">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
              Insights of AOP, R-ABI
              </h3>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
                                        
    )
}

export default carousel;