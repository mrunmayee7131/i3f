import React from "react";
import Navbar from "../header/navbar";
import Footer from "../footer2/footer";
import b1 from "./assets/blog1.webp"
import b2 from "./assets/blog2.webp"
import b3 from "./assets/blog3.webp"
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";

function Blog(){
    return(
<div>
    <Navbar></Navbar>
<div class="py-20">
<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
<div class="mb-12 space-y-2 text-center">
<h2 class="mt-10 text-3xl font-bold text-fuchsia-800 md:text-4xl dark:text-fuchsia">BLOGS</h2>
</div>

<div class="lg:w-3/4 xl:w-2/4 lg:mx-auto">
<div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-gray-400 dark:shadow-none shadow-2xl shadow-transparent  sm:gap-8 sm:flex transition duration-300 ">
<div class="sm:w-2/6 rounded-3xl overflow-hidden ">
<img
src={b1}
alt="art cover"
loading="lazy"
width="1000"
height="667"
class="h-56 sm:h-full w-full object-cover object-top transition duration-500"
/>
</div>

<div class="sm:p-2 sm:pl-0 sm:w-4/6">
<span class="mt-4 mb-2 inline-block font-medium text-gray-700 dark:text-gray-800 sm:mt-0">Posted on October 21, 2021 by i3f</span>
<h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
Workshop to guide graduate from product MVP to business soft launch</h3>
<p class="my-6 text-base text-gray-600 dark:text-gray-700">
Cisco thingQbator is organizing a workshop for the startups by Mr. Rohaan Goswami, Young entrepreneur, Humanitarian Engineer, TEDx Speaker, COO & Director of Product at Ycenter, on the 21st & 22nd of October, 2021. 
</p>

<div class="flex gap-4">
<Popover>
      <PopoverHandler>
        <Button>Click for Highlights</Button>
      </PopoverHandler>
      <PopoverContent>
        <p className="font-normal text-center text-justify ">Content goes here..</p>
      </PopoverContent>
    </Popover>

</div>
</div>
</div>
<br></br>
<div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-gray-400 dark:shadow-none shadow-2xl shadow-transparent  sm:gap-8 sm:flex transition duration-300 ">
<div class="sm:w-2/6 rounded-3xl overflow-hidden ">
<img
src={b2}
alt="art cover"
loading="lazy"
width="1000"
height="667"
class="h-56 sm:h-full w-full object-cover object-top transition duration-500"
/>
</div>

<div class="sm:p-2 sm:pl-0 sm:w-4/6">
<span class="mt-4 mb-2 inline-block font-medium text-gray-700 dark:text-gray-800 sm:mt-0">Posted on October 21, 2021by i3f</span>
<h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
Create successful startups & learn the basics of funding by Dr. Dhruv Nath</h3>
<p class="my-6 text-base text-gray-600 dark:text-gray-700">
To run a successful start-up, the financial aspect plays a major role. Dr. Dhruv Nath, Director, Lead angle network and co-author of “Funding your start-up: And other nightmares” took the session on “Create successful startups & learn the basics of funding”.</p>

<div class="flex gap-4">
<Popover>
      <PopoverHandler>
        <Button>Click for Highlights</Button>
      </PopoverHandler>
      <PopoverContent>
        <p className="font-normal text-center text-justify ">Content goes here..</p>
      </PopoverContent>
    </Popover>

</div>
</div>
</div>
<br></br>
<div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-gray-400 dark:shadow-none shadow-2xl shadow-transparent  sm:gap-8 sm:flex transition duration-300 ">
<div class="sm:w-2/6 rounded-3xl overflow-hidden ">
<img
src={b3}
alt="art cover"
loading="lazy"
width="1000"
height="667"
class="h-56 sm:h-full w-full object-cover object-top transition duration-500"
/>
</div>

<div class="sm:p-2 sm:pl-0 sm:w-4/6">
<span class="mt-4 mb-2 inline-block font-medium text-gray-700 dark:text-gray-800 sm:mt-0">Posted on October 21, 2021 by i3f</span>
<h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
Insights of AOP, R-ABI</h3>
<p class="my-6 text-base text-gray-600 dark:text-gray-700">
Agirpreneurship Orientation Program of start-ups selected under COHORT-4 has been started from 27-09-2021. This training session covers technical and business aspects to run a start-up.</p>

<div class="flex gap-4">
<Popover>
      <PopoverHandler>
        <Button>Click for Highlights</Button>
      </PopoverHandler>
      <PopoverContent>
        <p className="font-normal text-center text-justify ">Content goes here..</p>
      </PopoverContent>
    </Popover>

</div>
</div>
</div>
</div>
</div>
</div>
<Footer></Footer>
</div>
    )
}

export default Blog;