import React,{useEffect,useState} from "react"
import "./units.css"
import image from "./assests/logo2.jpg"
function Unit(){

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);  
    const imagee=document.getElementsByTagName("img");
    const handleScroll = () => {
      if (window.scrollY > 1350) {
         imagee[5].classList.add("img1");
         imagee[6].classList.add("img2");
         imagee[7].classList.add("img3");
         imagee[8].classList.add("img4");
      }else{
        imagee[5].classList.add("null2");
        imagee[6].classList.add("null2");
        imagee[7].classList.add("null2");
        imagee[8].classList.add("null2");
      }
    };

    return(
    <div className="back">
        <h1>Our Units</h1>
     <div className="unitimg">
     <img   src={image}/>
     <img  src={image}/>
     <img  src={image}/>
     <img  src={image}/>
     </div>
    </div>
    )
}
export default Unit;