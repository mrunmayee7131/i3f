import React from "react";
import "./unitss.css"
import image1 from "./assests/brain.webp"
import image2 from "./assests/hands.webp"
import image3 from "./assests/money.webp"

import { useEffect } from "react";
function Units(){

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);  
    const imagee=document.getElementsByTagName("img");
    const text=document.getElementsByTagName("h3");
    const handleScroll = () => {
      if (window.scrollY > 100 && window.screen.width >300) {
         imagee[5].classList.add("imgg1");
         imagee[6].classList.add("imgg2");
         imagee[7].classList.add("imgg3");
        //  text[0].classList.add("h3");
        //  text[1].classList.add("h3");
        //  text[2].classList.add("h3");
      }else{
        imagee[5].classList.add("null");
        imagee[6].classList.add("null");
        imagee[7].classList.add("null");
        // text[0].classList.add("null");
        // text[0].classList.remove("h3");
        // text[1].classList.add("null");
        // text[2].classList.remove("h3");
        // text[2].classList.add("null");
        // text[1].classList.remove("h3");
        imagee[2].classList.remove("imgg1");
        imagee[3].classList.remove("imgg2");
        imagee[4].classList.remove("imgg3");
      }
    };

    return(
        <div className="body">
              <div>
            <h1 className="text-6xl custom:text-4xl">About I-3F</h1>
        </div>
        <div className="flex justify-around h20 mt-20 md:flex-row flex-col lg:pl-36 lg:pr-36">
          <div className="textdiv">
          <img  src={image1} />
          <h3 className="" >Training</h3>
          <p className="text-justify ml-6 mr-6">
          The Ideation Innovation & Incubation (I-3) Foundation, known as I-3F, operates as a significant Section 8 company functioning as an umbrella organization within IIT (BHU) in Varanasi. Its primary mission revolves around cultivating an entrepreneurial ecosystem and nurturing fledgling startups.
            </p>
            </div>
            <div className="textdiv">
          <img  src={image2} />
          <h3 className="">Incubation</h3>
          <p className="text-justify ml-6 mr-6">
          I-3F serves as a comprehensive support system, offering what it terms as 'Start to Scale' assistance for budding entrepreneurs.
            </p>
            </div>
            <div className="textdiv">
          <img  src={image3}/>
          <h3 className="">Financial Support</h3>
          <p className="text-justify ml-6 mr-6">
          From ideation to scaling operations, the foundation provides an extensive array of resources and guidance crucial for entrepreneurial success.
            </p>
            </div>
            </div>
         
         <div className="unitimages">
            <div className="flex flex-col justify-center align-center">
          <img  src={image1} />
          <h3 className="pl-16" >Training</h3>
          </div>
          <div className="flex flex-col justify-center align-center">
          <img  src={image2} />
          <h3 className="pl-14" >Incubation</h3>
          </div>
          <div className="flex flex-col justify-center align-center ">
          <img  src={image3} />
          <h3 className="pl-8" >Financial support</h3>
          </div>
          </div>
           <div className="unittext">
          
            <p className="text-center text-xl font-semibold text-gray-500">
            The Ideation Innovation & Incubation (I-3) Foundation, known as I-3F, operates as a significant Section 8 company functioning as an umbrella organization within IIT (BHU) in Varanasi. Its primary mission revolves around cultivating an entrepreneurial ecosystem and nurturing fledgling startups.
            </p>
            <p className="text-center text-xl font-semibold text-gray-500">
            I-3F serves as a comprehensive support system, offering what it terms as 'Start to Scale' assistance for budding entrepreneurs. From ideation to scaling operations, the foundation provides an extensive array of resources and guidance crucial for entrepreneurial success.
            </p>
          
           </div>
        </div>
    )
}
export default Units;




