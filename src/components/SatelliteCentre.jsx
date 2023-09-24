import React from "react";
import './SatelliteCentre.css';
import Navbar from "../component/header/navbar"
import Footer from "../component/footer2/footer"
function Sc(){
    return(
        <div  className="sc">
            <Navbar />
        <div>
        <h1 className="sch">    
            <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
            Satellite Centre
            <div class="arrow1">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </h1>
        </div>
        <div className="p1">
        <p>The main establishment of this Centre is at IIT (BHU) and further its Satellite Centres are being developed at Singrauli for extending the benefit of this initiative operational as well as CSR and welfare areas of NCL. As per directive of Ministry of Corporate Affairs, NCL is supporting NIIC under its CSR from last 2 years. The main objectives of this Centre are as follows:</p>
        </div>
        <div className="pts1">
        <li>To promote entrepreneurship among students and society</li>
        <li>To create support system for Innovation-based enterprises/start-ups</li>
        <li >To encourage technology transfer and commercialization</li>
        <li >To sustain job creation and support “Make in India” Model</li>
        <li >To forge a close linkage between new business & academia    R & D</li>
        <li >To provide R & D support to SMEs of the region and business incubators</li>
        </div>
        <h2 className="ki">Key initiatives taken by this Centre in last 2 years are as follows:</h2>    
        <div className="pts1">
        <li >Establishment of Khadi and Handloom Centre at Semuar village as Satellite Centre of NIIC</li>
        <li >Establishment of “Food Tech-Park-Training & Development Centre” as Satellite Centre of NIIC at Birkunia village of Singrauli</li>
        <li >Establishment of Drone Manufacturing and Rapid Prototyping Lab under satellite Centre of NIIC at NCL-HQ, Singrauli</li>    
        </div>
        <Footer />
        </div>
    )
}

export default Sc;
