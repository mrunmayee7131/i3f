import React from "react";
import "./circle.css";
import Image from "./assests/logo2.jpg"
function Circle(){
    return(
        <div class="box">
          {/* <img className="i" src={Image} /> */}
          <div className="content">
            <img className="i" src={Image} />
            <button>See More</button>
          </div>
        </div>
    )
}
export default Circle;