import React from "react";
import svs from './assets/TIIC-Facilities.webp';
import lf from './assets/TIIC-Lab-Facilities.webp';
import of from './assets/TIIC-Facilities.webp';
import './Services.css'
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"



function Services(){
    return(
        <div>
        <h1>Our Services/Facilities</h1>
        <p>I3F has collaborated with different organizations to provide following services</p>
        <img src={svs} />
        <h2>Office Facilities:</h2>
        <div className="off">
        <img src={of} className="of" />
        <li>Office Space</li>
<li />Computer Systems
<li />Printers
<li />Internet/WiFi
<li />Photocopier
<li />Conference Hall
<li />Training Hall
<li />Prototype and testing area
<li />Utilities area
<li>Power backup using two online UPS (5 & 6 KVA) and 15 KVA DG set</li>
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<h2>Lab Facilities</h2>

<img src={lf}  className="of"/>
<li />Laminar Airflow
<li />Lyophilizer
<li />BOD incubator
<li />CO2 incubator
<li />Centrifuge
<li />Spectrophotometer
<li />Vertical Autoclave
<li />Orbital Shakers
<li />Cold room
<li />Fermenters
<li />Chemical workstation
<li />Hot air Oven
<li />PCR
<li />Gel doc systems
<li />Gel Electrophoresis
<li />RI detector
<li />Deep Freezer
<li />Cell sonicator
<li />Polarizing Microscope

        </div>

    )
}

export default Services;