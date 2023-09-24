import React from "react";
import ec from './images/E-Cell-IIT-BHU-Logo.webp';
import './ecell.css'

function Ecell(){
    return(
        <div>
        <h1>E-Cell IIT(BHU)</h1>
        <img src={ec} />
        <p>Student Body of IIT (BHU) Varanasi is formed as an Entrepreneurship Cell to promote entrepreneurial awareness among the students.<a href='https://www.ecelliitbhu.com/' >E-Cell, IIT(BHU) </a> performs various capacity-building programs, ideation Workshops so that the students can come up with new ideas and try to commercialize them through a start-up.</p>
        </div>

    )
}

export default Ecell;