import React from "react";
import Company from "../../component/components/assets/company__1_-removebg-preview.png";
import Business from "../components/assets/business (3).png";
import Funding from "../components/assets/png/001-funding.png";
import Patent from "../components/assets/patent.png";

function Count() {
  return (
    <div className="bg-gray-700 md:pt-[50px] md:pb-[50px] flex flex-col justify-center">
      <div className="flex flex-col sm:flex-row justify-center items-center mx-auto">
        <div className="flex flex-col items-center mx-4 my-8 sm:my-0">
          <img src={Company} width={100} className="mix-blend-screen" />
          <div className="font-montserrat text-gray-500 text-center mt-2">
            <h1 className="w-32 sm:w-auto xl:w-[300px] xl:h-[100px]">130 +</h1>
          </div>
          <p className="text-xl font-light text-gray-300">Trained Startups</p>
        </div>

        <div className="flex flex-col items-center mx-4 my-8 sm:my-0">
          <img src={Business} width={100} className="mix-blend-screen" />
          <div className="font-montserrat text-gray-500 text-center mt-2">
            <h1 className="w-32 sm:w-auto xl:w-[300px] xl:h-[100px]">53 +</h1>
          </div>
          <p className="text-xl font-light text-gray-300">Incubated Startups</p>
        </div>

        <div className="flex flex-col items-center mx-4 my-8 sm:my-0">
          <img src={Funding} width={100} className="mix-blend-screen" />
          <div className="font-montserrat text-gray-500 text-center mt-2">
            <h1 className="w-32 sm:w-auto xl:w-[300px] xl:h-[100px]">230 +</h1>
          </div>
          <p className="text-xl font-light text-gray-300">Lakhs Fund Supported</p>
        </div>

        <div className="flex flex-col items-center mx-4 my-8 sm:my-0">
          <img src={Patent} width={100} className="mix-blend-screen" />
          <div className="font-montserrat text-gray-500 text-center mt-2">
            <h1 className="w-32 sm:w-auto xl:w-[300px] xl:h-[100px]">19 +</h1>
          </div>
          <p className="text-xl font-light text-gray-300">Patentable technologies</p>
        </div>
      </div>
    </div>
  );
}

export default Count;
