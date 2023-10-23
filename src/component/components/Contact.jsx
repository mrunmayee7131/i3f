import React from "react";
import Navbar from "../header/navbar";
import Footer from "../footer2/footer";

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-16 justify-center items-center w-screen bg-white">
        <div className="container mx-auto my-12 px-4 lg:px-20">
          <div className="mt-2 w-full p-10 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Type Your Query Here"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 md:w-1/2 lg:w-1/4">
              <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-fuchsia-800 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl text-white my-4">Contact Us</h1>
              <p className="text-gray-400">Address: <br></br> Ideation Innovation & Incubation (I-3) Foundation Opposite to Proctor Office, IIT (BHU) Varanasi Indian Institute of Technology (Banaras Hindu University) Varanasi Varanasi-221005, Uttar Pradesh, India</p>
              <br></br>
              <div >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.3525703248231!2d82.9922069983345!3d25.2604934879394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e339f56f121cf%3A0xd780c7a3972fbb3a!2sTechnology%20Innovation%20%26%20Incubation%20Centre!5e0!3m2!1sen!2sin!4v1692885623650!5m2!1sen!2sin"
                  width="100"
                  height="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
