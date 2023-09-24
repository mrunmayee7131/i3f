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
         imagee[8].classList.add("img1");
         imagee[9].classList.add("img2");
         imagee[10].classList.add("img3");
         imagee[11].classList.add("img4");
      }else{
         imagee[8].classList.add("null2");
        imagee[8].classList.remove("img1");
        imagee[9].classList.add("null2");
        imagee[10].classList.add("null2");
        imagee[11].classList.add("null2");
        imagee[9].classList.remove("img2");
        imagee[10].classList.remove("img3");
        imagee[11].classList.remove("img4");
      }
    };

    return(
    <div className="back">
        <h1>Our Units</h1>
     <div className="unitimg">
     <div >
      <div >
     <img   src={image}/>
     </div>
     </div>

     <div>
      <div>
     <img   src={image}/>
     </div>
     </div>

     <div>
      <div>
     <img   src={image}/>
     </div>
     </div>

     <div>
      <div>
     <img   src={image}/>
     </div>
     </div>


    
     </div>
    </div>
    )
}
export default Unit;