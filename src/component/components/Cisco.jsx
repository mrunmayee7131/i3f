import React from "react";
import './Cisco.css';
import cis from './assets/Cisco-logo-1.webp'
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"

// import cis from './images/Cisco-logo-1.webp'


function Cisco(){
    return(
        <div>
        <h1>Cisco thingQbator, IIT (BHU)</h1>
        <img src={cis} />
        <p>Since May 2018, as a part of a CSR initiative, Cisco Systems along with NASSCOM Foundation has established a <a href='https://thingqbator.nasscomfoundation.org/' target="_blank"> Cisco thingQbator</a> at IIT (BHU) Varanasi. This AI and IoT-based makerspace program help to accelerate innovation and entrepreneurship among the student community.
</p>
<h2>Focus Area</h2>
<li>AI & IoT</li>
<li>Machine Learning</li>
<li>Engineering</li>
<h2>Programs</h2>
<h3>Hackatons</h3>
<p>Hackathons are 24-hr programs (single sprint) in which students and budding entrepreneurs are given a chance to build software/hardware to showcase their competency on a problem statement to develop a solution that best mitigates a real-world challenge.
Till now 5 Hackathons have been successfully organized and the winners were awarded.</p>
<h3>Workshops</h3>
<p>Workshops on AI, IoT, ML, Blockchain and other future technologies are conducted from time to time. Industrial and academic experts from these domains are invited and students get hands-on training and mentoring.</p>
<h3>Webinars</h3>
<p>Webinars are conducted by IIT-BHU Alums, Technopreneurs, Senior executives of MNCs, Venture capitalists on various technical and business-related sessions.</p>
<h3>thingQbator Internship Programs:</h3>
<p>It is a virtual creative learning program where university students engage in problem-solving and building solutions. The Design Thinking Process is applied, and the program is broken into three tracks, based on various stages at which students’ projects are. These tracks are Learning Track, Project Track, and Startup Track.
</p>
<h2>Facilities:</h2>
<li /> Makerspace Network
<li />Local Server
<li />Webex Teams
<li />Edge Teams
<li />Edge Routers
<li />IoT Platforms
<li />Cloud infra
<li />Development Boards
<li />Sensors & Actuators Components
<li />3D Printing
<li />Cisco Sparkboard

        </div>
    )
}

export default Cisco;