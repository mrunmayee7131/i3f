    import React from "react";
    import './R-ABI.css';
    import ankuran from './images/ankuran.webp';
    import prasfutan from './images/prasfutan.webp';
    import rabiimg from './images/rabi.webp';

    function Rabi(){
        return(
            <div>
            <div>
            <h1 className="sch1">    
                <div class="arrow2">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                RKVY-RAFTAAR AGRI BUSINESS INCUBATOR (R-ABI)
                <div class="arrow3">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </h1>
            </div>
            <div className="p11">
                <img src={rabiimg} />
            <p className="p111">The Rashtriya Krishi Vikas Yojna – Remunerative Approaches for Agriculture and Allied Sector Rejuvenation (RKVY-RAFTAAR) Agripreneurship is a scheme of the Ministry of Agriculture and Farmers’ Welfare (MoA&FW), Govt. of India aimed at strengthening infrastructure in agriculture and allied sector in order to promote agripreneurship and agribusiness by providing financial support and nurturing the incubation ecosystem. Ministry of Agriculture & Farmers’ Welfare, Government of India sanctioned to establish RKVY – RAFTAAR Agri-Business Incubator (R-ABI) at Indian Institute of Technology (BHU) Varanasi in January 2019.</p>
            </div>
            <h2 className="ki1">R-ABI: Incubation Programs</h2>

            <div>
            <div className="ank">
            <div className="container">
    <img src={ankuran} className="imager" />
    <div className="overlayr">
        <div className="textr">
        <h2>ANKURAN – Pre-Seed Stage</h2><li>2-Months training program for farmers, students and youth having innovative ideas</li>
    <li>Incubation support for product development</li>
    <li>Platform to launch products</li>
    <li>Grant-in-aid up to Rs. 5 Lakhs</li></div>
    </div>
    </div>
            </div>

            <div className="pras">
            <div className="container">
    <img src={prasfutan} className="imager" />
    <div className="overlayr">
        <div className="textr">
        <h2>PRASFUTAN – Seed Stage</h2><li>2-Months residency for start-ups with the minimum viable product (MVP)</li>
    <li>Incubation support for scale-up of operations</li>
    <li>Market and investor linkages</li>
    <li>Grant-in-aid up to Rs. 25 Lakhs</li></div>
    </div>
    </div>
    </div>
            </div>
            <div className="focus">
                <h2 className="ki1">FoCuS aReA</h2>
                <p className="pts1"><li>Bio Tech</li>
                <li>Clean Tech</li>
                <li>Farm Machanziation</li>
                <li>AI & IoT</li>
                <li>Food Tech</li>
                <li>E-Commerce</li>
                For More Details   
                <a href="https://rkvy-raftaariitbhu.org/">  Click here</a></p>
            </div>
            </div>
        )
    }

    export default Rabi;
