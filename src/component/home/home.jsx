import React from "react";
import img from "../components/assets/I3F Logo-1.png";
import { Link } from 'react-router-dom';
import ParticlesComponent from "./Background/Particles";

function Home() {
  return (
    <div className="text-center relative ">
      <ParticlesComponent id="particles" />
      <div className="absolute top-[100px] md:top-[200px] lg:top-[250px]  left-[50%] transform translate-x-[-50%] flex flex-col items-center justify-center xl:w-[900px]">
        <h1 className="text-purple text-center text-3xl md:text-4xl lg:text-5xl  mb-2">Innovation Incubation Ideation Foundation</h1>
        <p className="text-black text-center mb-4">I-3f Foundation, Indian Institute of Technology (BHU) Varanasi</p>
        <div className="flex justify-center">
          <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base border bg-gray-400 font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" target="_blank" href="https://forms.gle/qrTWHYmKSCTPRxSf6">
            Apply for Incubation
          </a>
          <Link className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black-900 border bg-black border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" to="/contactus">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
