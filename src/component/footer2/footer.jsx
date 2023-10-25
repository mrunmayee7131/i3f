import React from "react";
import styles from "./footer2.module.css";

import face from "./assets/face.png";
import Insta from "./assets/insta.png";
import link from "./assets/link.png";
import tweet from "./assets/tweet2.jpg";
import logo from "./assets/i3flogo.jpg"
import { Link } from "react-router-dom";

function Footer2() {
  return (
    <>
      <footer className="bg-black text-center text-neutral-600 dark:bg-black dark:text-neutral-200 lg:text-left w-full">
        <div className="px-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-2 md:grid-cols-2 lg:grid-cols-5">
            <div className="fi">
              <div className="brightness-100">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <a href="https://www.facebook.com/I3F.IITBHU/" className="pr-6 text-neutral-600 brightness-100" target="_blank">
                <img src={face} alt="Facebook" className="h-10 w-10" />
              </a>
              <a href="https://twitter.com/I3F_IITBHU" className="pr-6 text-neutral-600 brightness-100" target="_blank">
                <img src={tweet} alt="Twitter" className="h-10 w-10" />
              </a>
              <a href="https://www.linkedin.com/in/i3fiitbhu/" className="pr-6 text-neutral-600 brightness-100" target="_blank">
                <img src={link} alt="LinkedIn" className="h-10 w-10" />
              </a>
              <a href="https://www.instagram.com/i3f.iitbhu/" className="pr-6 text-neutral-600 brightness-100" target="_blank">
                <img src={Insta} alt="Instagram" className="h-10 w-10" />
              </a>
            </div>
            <div className="md:w-1/2 lg:w-auto">
              <h6 className="pb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful Links
              </h6>
              <p className="pb-4">
                <Link to="/Ip" className="text-neutral-600 dark:text-neutral-200" target="_parent">Incubation Policy</Link>
              </p>
              <p className="pb-4">
                <Link to="/" className="text-neutral-600 dark:text-neutral-200" target="_parent">Newsletter</Link>
              </p>
              <p className="pb-4">
                <Link to="/Blog" className="text-neutral-600 dark:text-neutral-200" target="_parent">Blogs</Link>
              </p>
              <p>
                <Link to="/" className="text-neutral-600 dark:text-neutral-200" target="_parent">Upcoming Events</Link>
              </p>
            </div>
            <div className="md:w-1/2 lg:w-auto">
              <h6 className="pb-4 flex justify-center font-semibold uppercase md:justify-start">
                Address
              </h6>
              <p>
                Ideation Innovation & Incubation (I-3) Foundation
                Opposite to Proctor Office, IIT (BHU) Varanasi
                Indian Institute of Technology (Banaras Hindu University) Varanasi
                Varanasi-221005, Uttar Pradesh, India
              </p>
            </div>
            <div className="md:w-1/2 lg:w-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.3525703248231!2d82.9922069983345!3d25.2604934879394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e339f56f121cf%3A0xd780c7a3972fbb3a!2sTechnology%20Innovation%20%26%20Incubation%20Centre!5e0!3m2!1sen!2sin!4v1692885623650!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer2;
