import React from "react";
import ec from '../components/assets/E-Cell-IIT-BHU-Logo.webp';
import './ecell.css'
import Navbar from "../header/navbar"
import Footer from "../footer2/footer"

function Ecell(){
    return(
        <div>
            <Navbar />
        <h1>E-Cell IIT(BHU)</h1>
        <img src={ec} />
        <p>Student Body of IIT (BHU) Varanasi is formed as an Entrepreneurship Cell to promote entrepreneurial awareness among the students.<a href='https://www.ecelliitbhu.com/' >E-Cell, IIT(BHU) </a> performs various capacity-building programs, ideation Workshops so that the students can come up with new ideas and try to commercialize them through a start-up.</p>
        <Footer />
        </div>

    )
}

export default Ecell;