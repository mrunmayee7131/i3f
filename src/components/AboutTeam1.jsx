import React from "react";
import './AboutTeam1.css';
import pk from './images/director_pkjain.webp';
import ch from './images/Dr.-P.-Chanak-1.webp';
import sg from './images/Dr.-Shishir-Gaur-1.webp';
import sk from './images/Dr.-Shyam-Kamal.webp';
import rs from './images/Prof.-R.-S.-Singh-1.webp';
import rt from './images/rajnesh_tyagi.webp';
import Navbar from "../component/header/navbar"
import Footer from "../component/footer2/footer"

function Abtteam1(){
    return(
        <div>
          <Navbar />
          <div>
        <h1 className="sch">    
            <div class="arrowt">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="he">Managing Commitee
            </div>
            <div class="arrow1t">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </h1>
        </div>
            <div  className="grid-container">
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="imaget" src={pk} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Prof. P. K. Jain</span><br />
   <span  className="bottom-text">Director, IIT (BHU) Varanasi</span>
    <br />
  </div>
</div>

  </div>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="imaget" src={rt} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Prof. Rajnesh Tyagi</span><br />
   <span  className="bottom-text">Director, I3F, IIT (BHU) Varanasi</span>
    <br />
  </div>
</div>
  </div>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="imaget" src={rs} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Prof. R. S. Singh</span><br />
   <span  className="bottom-text">Member<br></br>Dept. of Chemical Engineering, IIT (BHU) Varanasi</span>
    <br />
  </div>
</div></div>  
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="imaget" src={sg} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Dr. Shishir Gaur</span><br />
   <span  className="bottom-text">Member<br></br>Dept. of Civil Engineering, IIT (BHU) Varanasi</span>
    <br />
  </div>
</div>
  </div>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="imaget" src={sk} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Dr. Shyam Kamal</span><br />
   <span  className="bottom-text">Member<br></br>Dept. of Electrical Engineering, IIT (BHU) Varanasi</span>
    <br />
  </div>
</div>
  </div>
  <div  className="grid-item">
  <div  className="card-wrapper">
  <div  className="card-top">
    <img  className="imaget" src={ch} />
  </div>
   
  <div  className="card-bottom">
    <span  className="top-text">Dr. Prasenjit Chanak</span><br />
   <span  className="bottom-text">Member<br />Dept. of Computer Science & Engineering, IIT (BHU) Varanasi</span>
    <br />
  </div>
</div></div>  
  
</div>
<Footer />
        </div>



    )
}
    
export default Abtteam1;