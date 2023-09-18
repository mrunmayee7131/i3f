import React from "react";
import './R-ABI.css';
import ankuran from './images/ankuran.webp';
import prasfutan from './images/prasfutan.webp';

function Rabi(){
    return(
        <div>
        <h1>RKVY-RAFTAAR AGRI BUSINESS INCUBATOR (R-ABI)</h1>
        <p>The Rashtriya Krishi Vikas Yojna – Remunerative Approaches for Agriculture and Allied Sector Rejuvenation (RKVY-RAFTAAR) Agripreneurship is a scheme of the Ministry of Agriculture and Farmers’ Welfare (MoA&FW), Govt. of India aimed at strengthening infrastructure in agriculture and allied sector in order to promote agripreneurship and agribusiness by providing financial support and nurturing the incubation ecosystem. Ministry of Agriculture & Farmers’ Welfare, Government of India sanctioned to establish RKVY – RAFTAAR Agri-Business Incubator (R-ABI) at Indian Institute of Technology (BHU) Varanasi in January 2019.</p>
        <h2>R-ABI: Incubation Programs</h2>
        <p>RKVY-RAFTAAR Agri-Business Incubator (R-ABI) is established in IIT(BHU) Varanasi in Jan 2019. The R-ABI aims to create a vibrant start-up ecosystem in the Eastern Uttar Pradesh region. The incubator is focusing on spreading awareness in youth, about farming as a fun and profitable business. Also leveraging Agri startups through training, coaching, mentoring & funding through various schemes of Govt of India.</p>
        <div className="ank">
        <h3>ANKURAN – Pre-Seed Stage</h3>
        <img src={ankuran} className="img"></img>
        <br></br><br></br>
<p>2-Months training program for farmers, students and youth having innovative ideas
Incubation support for product development
Platform to launch products
Grant-in-aid up to Rs. 5 Lakhs
</p>
        </div>

        <div className="pras">
        <h3>PRASFUTAN – Seed Stage</h3>
        <img src={prasfutan} className="img"></img>
        <br></br><br></br>
<p>2-Months residency for start-ups with the minimum viable product (MVP)
Incubation support for scale-up of operations
Market and investor linkages
Grant-in-aid up to Rs. 25 Lakhs

</p>
        </div>
        <div className="focus">
            <h2>FoCuS aReA</h2>
            <p><li />Bio Tech
            <li />Clean Tech
            <li />Farm Machanziation
            <li />AI & IoT
            <li />Food Tech
            <li />E-Commerce</p>
            For More Details
            <a href="https://rkvy-raftaariitbhu.org/">Click here</a>
        </div>
        </div>
    )
}

export default Rabi;