import React from "react";
import Nv from "../header/navbar";
import Ft from "../footer2/footer";
import lo from "../components/assets/NCL_-IIT__BHU__INCUBATION_CENTRE_1_-removebg-preview-removebg-preview.png";
import im from "../components/assets/Untitled design (2).png";
import imm from "../components/assets/Untitled design (3).png";

function NIIC() {
  return (
    <>
      <Nv />
      <div className="text-center sm:text-left">
        <img src={lo} height={200} className="mx-auto mt-16" /> {/* Center the image */}
        <h1 className="text-3xl sm:text-6xl mt-4 sm:mt-0 pt-2 sm:pt-0">
          NCL-IIT (BHU) INCUBATION CENTRE (NIIC)
        </h1>
        <h1 className="text-xl sm:text-2xl">Collaborative Initiative of NCL & IIT (BHU)</h1>
        <p className="lg:ml-16 mt-4 sm:mt-16 ml-4 sm:ml-8 mr-4 sm:mr-8">
          Since November 2018, Northern Coalfields Limited (NCL) through the CSR initiative, collaborated with IIT (BHU) Varanasi to strengthen the start-up ecosystem to facilitate the commercialization of the research activities.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row bg-slate-200 rounded-3xl mt-4 sm:mt-8 ml-4 sm:ml-16 mr-4 sm:mr-16">
        <img src={im} className="mx-auto sm:mx-0" />
        <div className="flex-col text-center sm:text-left h-full items-center mt-4 sm:mt-48">
          <h1 className="text-3xl sm:text-6xl">Core Strengths</h1>
          <p className="mt-4 sm:mt-8">Technology Commercialization in the sector of Agricultural, Agri-Business, Cleantech, Food Safety & Testing, Information Technology & E-Commerce, Bio-Technology & Health Sector.</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row bg-slate-200 rounded-3xl mt-4 sm:mt-8 ml-4 sm:ml-16 mr-4 sm:mr-16 mb-4 sm:mb-8">
        <div className="flex-col text-center sm:text-left h-full items-center mt-4 sm:mt-48">
          <h1 className="text-3xl sm:text-6xl">Services</h1>
          <p className="mt-4 sm:mt-8 ml-4 sm:ml-8">Mentoring, Counselling, Training, Financial Linkages, Seed Funding, Lab Facility, Office Facility, Networking support, etc.</p>
        </div>
        <img src={imm} className="mx-auto sm:mx-0" />
      </div>
      <Ft />
    </>
  );
}

export default NIIC;
