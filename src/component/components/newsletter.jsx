import React from "react";
import './newsletter.css'
import Navbar from "../footer2/footer"
import Footer from "../header/navbar"

function Nl(){
    return(
        <div>
            <Navbar />
        <h1>Newsletter</h1>
        <h2>RKVY-RAFTAAR Agri-Business Incubator</h2>
        <li><a href='#'>Newsletter_(Jan-2020 _ June-2020)</a></li>
        <li><a href='#'>Newsletter (July-2020 _ Dec-2020)</a></li>
        <li><a href='#'>Newsletter (Jan-2021 _ June-2021)</a></li>
        <h2>Cisco thingQbator, IIT (BHU)</h2>
        <li><a href='#'>tQb IIT (BHU) Yearbook_2020-21</a></li>
        <Footer />
        </div>

    )
}

export default Nl;