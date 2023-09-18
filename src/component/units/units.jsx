import React from "react";
import "./unitss.css"
import image from "./assests/logo2.jpg"
import { useEffect } from "react";
function Units(){

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);  
    const imagee=document.getElementsByTagName("img");
    const handleScroll = () => {
      if (window.scrollY > 200) {
         imagee[2].classList.add("imgg1");
         imagee[3].classList.add("imgg2");
         imagee[4].classList.add("imgg3");
      }else{
        imagee[2].classList.add("null");
        imagee[3].classList.add("null");
        imagee[4].classList.add("null");
      }
    };





    return(
        <div className="body">
              <div>
            <h1>About I3F</h1>
        </div>
        <div className="flex justify-around h20 mt-20">
          <img  src={image} />
          <img  src={image} />
          <img   src={image} />
        </div>
           <div className="unittext">
            <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus commodi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus commodi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus commodi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus commodi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus commodi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus
            </p>
            <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus commodi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus commodi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti labore sint fugiat repellendus, quas veniam suscipit cumque saepe similique quis accusantium tempore ex nihil quaerat rerum quasi delectus commodi?
            </p>
          
           </div>
        </div>
    )
}
export default Units;