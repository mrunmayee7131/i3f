// import IMG1 from '../carousel/assets/cisco.webp';
// import IMG2 from '../carousel/assets/Dhruv.webp';
import React from 'react'
import IMG1 from '../carousel/assets/cisco.webp';
import IMG2 from '../carousel/assets/Dhruv.webp';



function carousel() {  
  const data =[
    {
      IMGUrl:IMG1,
      Details:" Workshop to guide graduate from product MVP to business soft launch..."
    },
    {
      IMGUrl:IMG2,
      Details:" Workshop to guide graduate from product MVP to business soft launch..."
    },
    {
      IMGUrl:IMG1,
      Details:" Workshop to guide graduate from product MVP to business soft launch..."
    },
    // {
    //   IMGUrl:IMG1,
    //   Details:" Workshop to guide graduate from product MVP to business soft launch..."
    // },
   
   ]
   let columnCount = 3; // Default column count
   let singleCard = false;

  
   let cardHeight = 'h-600';
   let imgHeight = 'h-350';
    
   if (data.length === 1 || data.length === 2) {
     columnCount = data.length;
     cardHeight = 'h-900'; // Change card height to 600px for 1 or 2 entries
     imgHeight='h-450';
   }
 
 
   if (data.length === 1) {
     singleCard = true;
   } else if (data.length === 2) {
     columnCount = 2;
   }
    return (
      <div  class="py-12">
      <div class="xl:container m-auto px-6 text-gray-600 xl:px-1">
      <div class="mb-12 space-y-2 text-center">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-fuchsia-800">Current Happenings</h2>
      
    </div>
    <div className={`grid gap-12 ${singleCard ? 'justify-center' : ''} ${singleCard ? 'w-full' : `md:grid-cols-${columnCount}`}`}>



          {/* <div class="group p-6 sm:p-8 rounded-3xl  bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-white-200 ">
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

{data.map((element, index) => (
  <div key={index} className={`group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-white-200 ${cardHeight}`} >
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={element.IMGUrl}
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        className={`${imgHeight} h-350 w-full object-cover object-top transition duration-500 group-hover:scale-105`}
        onError={(e) => {
          console.log(e);
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/1000x667'; // Placeholder image or default image URL

        }}
      />
    </div>
    <div className="mt-6 relative">
      <h3 className="text-xl font-semibold text-gray-500 dark:gray-900 pb-8">
        {element.Details}<a href="" className='text-lg font-medium text-blue-500 hover:text-blue-900'>Read more</a>
      </h3>
    </div>
  </div>
))}




          {/* <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none  dark:border-gray-700 dark:bg-white-200 ">
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
            
          </div> */}


        </div>
      </div>
    </div>
                                        
    )
}

export default carousel;