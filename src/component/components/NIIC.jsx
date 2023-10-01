import React from "react";
import Nv from "../header/navbar";
import Ft from "../footer2/footer";
import lo from "../components/assets/NCL_-IIT__BHU__INCUBATION_CENTRE_1_-removebg-preview.webp"
import im from "../components/assets/Untitled design (2).png"
import imm from "../components/assets/Untitled design (3).png"
function NIIC (){
    return(
        <>
     <Nv />
     <div className="flex justify-center mt-16">
     <img src={lo} height={200}/>
     </div>
<h1 className="text-6xl mt-0 pt-0 ">NCL-IIT (BHU) INCUBATION CENTRE (NIIC)</h1>

<h1 className="text-2xl">Collaborative Initiative of NCL & IIT (BHU)</h1>


<p className="text-center mt-16 ml-8 mr-8 ">Since November 2018, Northern Coalfields Limited (NCL) through the CSR initiative, collaborated with IIT (BHU) Varanasi to strengthen the start-up ecosystem to facilitate the commercialization of the research activities.</p>
<div className="flex bg-slate-200 rounded-3xl mt-8 ml-16 mr-16">
<img src={im} />
<div className="flex-col h-full items-center mt-48">
<h1 className="text-6xl">Core Strengths</h1>
<p className="mt-8">Technology Commercialization in the sector of Agricultural, Agri-Business, Cleantech, Food Safety & Testing, Information Technology & E-Commerce, Bio-Technology & Health Sector.</p>
</div>
</div>
<hr></hr>
<div className="flex bg-slate-200 rounded-3xl mt-8 ml-16 mr-16 mb-8">

<div className="flex-col h-full items-center mt-48">
<h1 className="text-6xl">Services</h1>
<p className="mt-8 ml-8">Mentoring, Counselling, Training, Financial Linkages, Seed Funding, Lab Facility, Office Facility, Networking support, etc.</p>
</div>
<img src={imm} />
</div>






  <Ft />

    </>
    )

}
export default NIIC;