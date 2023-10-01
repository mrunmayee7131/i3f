import React from "react"
import Cisco from "./assets/Dr.-P.-Chanak-1.webp";
function Ca (){
  return (
    <div  class="py-12">
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div class="mb-12 space-y-2 text-center">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Sharing is Caring</h2>
      <p class="lg:mx-auto lg:w-6/12 text-black dark:text-gray-700">
        Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
        aliquid explicabo? Excepturi, voluptate?
      </p>
    </div>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="relative overflow-hidden rounded-xl">
          <img src={Cisco}
          alt="art cover" loading="lazy" width="1500" height="667" class="h-64 w-full mix-blend-normal  object-top transition duration-500 group-hover:scale-105"/>
        </div>
        <div class="mt-6 relative">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
            De fuga fugiat lorem ispum laboriosam expedita.
          </h3>
          <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
          </p>
          <a class="inline-block" href="#">
            <span class="text-primary">Read more</span>
          </a>
        </div>
        
      </div>
      <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="relative overflow-hidden rounded-xl">
          <img src={Cisco}
          alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full mix-blend-normal  object-top transition duration-500 group-hover:scale-105"/>
        </div>
        <div class="mt-6 relative">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
            De fuga fugiat lorem ispum laboriosam expedita.
          </h3>
          <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
          </p>
          <a class="inline-block" href="#">
            <span class="text-primary">Read more</span>
          </a>
        </div>
        
      </div>
      <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="relative overflow-hidden rounded-xl">
          <img src={Cisco}
          alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full mix-blend-normal  object-top transition duration-500 group-hover:scale-105"/>
        </div>
        <div class="mt-6 relative">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
            De fuga fugiat lorem ispum laboriosam expedita.
          </h3>
          <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
            Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
          </p>
          <a class="inline-block" href="#">
            <span class="text-primary">Read more</span>
          </a>
        </div>
        
      </div>
    </div>
  </div>
</div>
  )
}
export default Ca;