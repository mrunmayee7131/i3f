import React from "react";
import Navbar from "../header/navbar";
import Footer from "../footer2/footer";
import b1 from "./assets/blog1.webp"
import b2 from "./assets/blog2.webp"
import b3 from "./assets/blog3.webp"
import styles from './blog.module.css';
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
<div class="mb-10">
<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
<div class="mb-12 space-y-2 text-center">
<h2 class="mt-10 text-3xl font-bold text-fuchsia-800 md:text-4xl dark:text-fuchsia">BLOGS</h2>
</div>

<div class="lg:w-3/4 xl:w-2/4 lg:mx-auto">
<div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-gray-400 dark:shadow-none shadow-2xl shadow-transparent  sm:gap-8 sm:flex transition duration-300 ">
<div class="sm:w-2/6 overflow-hidden flex justify-center items-center">
    <img
        src={b1}
        alt="art cover"
        loading="lazy"
        className="w-full object-cover object-top transition duration-500"
    />
</div>



<div class="sm:p-2 sm:pl-0 sm:w-4/6">
<span class="mt-4 mb-2 inline-block font-medium text-gray-700 dark:text-gray-800 sm:mt-0">Posted on February 15, 2024</span>
<h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
CIC meeting of COHORT-6 startups</h3>
<p class="my-6 text-base text-gray-600 dark:text-gray-700">
The online CIC meeting of COHORT-6 startups was held on 6th February 2024. All the13 startups presented their last 3 months progress report along with the financial details of the company. Based on their progress and revenue, the committee recommended 9 startups for the final funding.
</p>

<div class="flex gap-4">
<Popover>
      <PopoverHandler>
        <Button>Click for Highlights</Button>
      </PopoverHandler>
      <PopoverContent>
        <p className="font-normal text-center text-justify ">The online CIC meeting of COHORT-6 startups was held on 6th February 2024. All the13 startups presented their last 3 months progress report along with the financial details of the company. Based on their progress and revenue, the committee recommended 9 startups for the final funding.

</p>
      </PopoverContent>
    </Popover>

</div>
</div>
</div>
<br></br>
<div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-gray-400 dark:shadow-none shadow-2xl shadow-transparent  sm:gap-8 sm:flex transition duration-300 ">
<div class="sm:w-2/6 overflow-hidden flex justify-center items-center">
    <img
        src={b2}
        alt="art cover"
        loading="lazy"
        className="w-full object-cover object-top transition duration-500"
    />
</div>

<div class="sm:p-2 sm:pl-0 sm:w-4/6">
<span class="mt-4 mb-2 inline-block font-medium text-gray-700 dark:text-gray-800 sm:mt-0">Posted on February 15, 2024</span>
<h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
2nd RIC of COHORT-6 and progress review of 4 startups of previous COHORTs</h3>
<p class="my-6 text-base text-gray-600 dark:text-gray-700">
The virtually 2nd RIC meeting of COHORT-6 startups was organized on 23rd January 2024. The startups presented their progress that they had done after 1st RIC. The committee members examined their progress and based on that they shortlisted 13 startups for CIC. The progress review meeting of 4 startups of previous COHORTs was also organized.</p>

<div class="flex gap-4">
<Popover>
      <PopoverHandler>
        <Button>Click for Highlights</Button>
      </PopoverHandler>
      <PopoverContent>
        <p className="font-normal text-center text-justify w-[300px]">The virtually 2nd RIC meeting of COHORT-6 startups was organized on 23rd January 2024. The startups presented their progress that they had done after 1st RIC. The committee members examined their progress and based on that they shortlisted 13 startups for CIC.The progress review meeting of 4 startups of previous COHORTs was also organized on the same day. All the 4 startups presented their progress report along with Utilization Certificate of last tranche. The committee members recommended the next tranche with certain conditions.

</p>
      </PopoverContent>
    </Popover>

</div>
</div>
</div>
<br></br>
<div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-gray-400 dark:shadow-none shadow-2xl shadow-transparent  sm:gap-8 sm:flex transition duration-300 ">
<div class="sm:w-2/6 overflow-hidden flex justify-center items-center">
    <img
        src={b3}
        alt="art cover"
        loading="lazy"
        className="w-full object-cover object-top transition duration-500"
    />
</div>

<div class="sm:p-2 sm:pl-0 sm:w-4/6">
<span class="mt-4 mb-2 inline-block font-medium text-gray-700 dark:text-gray-800 sm:mt-0">Posted on February 15, 2024</span>
<h3 class="text-2xl font-semibold text-gray-800 dark:text-black">
Agripreneurship Orientation Programme (AOP) for COHORT-6</h3>
<p class="my-6 text-base text-gray-600 dark:text-gray-700">
It is a great pleasure to inform that RKVY-RAFTAAR Agribusiness Incubator, IIT BHU, Varanasi is launching the virtual Agripreneurship Orientation Program (AOP) from Monday, 4th December, 2023 to Friday, 12th January, 2024 for the shortlisted startups of COHORT-6.</p>

<div class="flex gap-4">
<Popover>
      <PopoverHandler>
        <Button>Click for Highlights</Button>
      </PopoverHandler>
      <PopoverContent>
        <p className="font-normal text-center text-justify ">It is a great pleasure to inform that RKVY-RAFTAAR Agribusiness Incubator, IIT BHU, Varanasi is launching the virtual Agripreneurship Orientation Program (AOP) from Monday, 4th December, 2023 to Friday, 12th January, 2024 for the shortlisted startups of COHORT-6.The sessions will power packed by knowledge and insights of the Industry Experts and Business Mentors from various domains. Wishing a very happy learning season to our startups!</p>
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