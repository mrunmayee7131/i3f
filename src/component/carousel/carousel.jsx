// import IMG1 from '../carousel/assets/cisco.webp';
// import IMG2 from '../carousel/assets/Dhruv.webp';
import React from 'react'
import IMG1 from '../carousel/assets/cisco.webp';
import IMG2 from '../carousel/assets/Dhruv.webp';
import { Link } from 'react-router-dom';
import Training from "../components/assets/Animation - 1712353973184.gif"


function carousel() {  
  const data =[
    {
      IMGUrl:IMG1,
      Details:"Workshop to guide graduate from product MVP to business soft launch.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip lorem ipsum nisi ut."
    },
    {
      IMGUrl:IMG2,
      Details:"Workshop to guide graduate from product MVP to business soft launch.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip lorem ipsum nisi ut."
    },
    {
      IMGUrl:IMG1,
      Details:"Workshop to guide graduate from product MVP to business soft launch.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip lorem ipsum nisi ut."
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
      <div  class="py-12 bg-gray-100">
      <div class="xl:container m-auto px-6 text-gray-600 xl:px-1">
      <div class="mb-12 space-y-2 text-center ">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-fuchsia-800">Current Happenings</h2>
      
    </div>
    <div className={`flex flex-row justify-around align-center p-[150px] pt-0 pb-0`}>



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
  <div key={index} className={` p-6 sm:p-8  bg-white    dark:border-gray-700 dark:bg-white-200 ${cardHeight}  w-[350px] shadow-xl`} >
    <div className="relative overflow-hidden flex justify-center">
      {/* <img
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
      /> */}
      <img src={Training} height={200}/>
    </div>
    <div className="mt-6 relative">
      <h3 className="text-md font-light text-gray-500 dark:gray-800 pb-8 text-center">
        {element.Details}
      </h3>
    </div>
    <div className='flex justify-center'>
      <button className='bg-gray-800 w-[150px] h-[40px] rounded-md'><Link className='text-lg font-medium text-white 'target='_parent' to='/Blog'>Read more</Link></button>
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