import React from "react";
import './AboutTeam.css';
import pk from './images/director_pkjain.webp';
import ch from './images/Dr.-P.-Chanak-1.webp';
import sg from './images/Dr.-Shishir-Gaur-1.webp';
import sk from './images/Dr.-Shyam-Kamal.webp';
import rs from './images/Prof.-R.-S.-Singh-1.webp';
import rt from './images/rajnesh_tyagi.webp';

function Abtteam(){
    return(
        <div>
        <h1>Managing Commitee</h1>
        <div class="row">
  <div class="column">
        <div class="card">
            <img src={pk} className="image" />
            <div className="container">
              <h4><b>Prof. P. K. Jain</b></h4> 
              <p>Director, IIT (BHU) Varanasi</p> 
            </div>
        </div>
        </div>
        <div class="column">
        <div class="card">
            <img src={rt} className="image" />
            <div className="container">
              <h4><b>Prof. Rajnesh Tyagi</b></h4> 
              <p>Director, I3F, IIT (BHU) Varanasi</p> 
            </div>
        </div>
        </div>
        </div>
        <div class="row">
        <div class="column">
        <div class="card">
            <img src={rs} className="image" />
            <div className="container">
              <h4><b>Prof. R. S. Singh</b></h4> 
              <p>Member</p>
              <p>Dept. of Chemical Engineering, IIT (BHU) Varanasi</p> 
            </div>
        </div>
        </div><div class="column">
        <div class="card">
            <img src={sg} className="image" />
            <div className="container">
              <h4><b>Dr. Shishir Gaur</b></h4> 
              <p>Member</p>
<p>Dept. of Civil Engineering, IIT (BHU) Varanasi

</p> 
            </div>
        </div></div>
        </div>
        <div class="row">
          <div class="column">
        <div class="card">
            <img src={sk} className="image" />
            <div className="container">
              <h4><b>Dr. Shyam Kamal</b></h4> 
              <p>Member</p>
<p>Dept. of Electrical Engineering, IIT (BHU) Varanasi</p> 
            </div>
        </div>
        </div><div class="column">
        <div class="card">
            <img src={ch} className="image" />
            <div className="container">
              <h4><b>Dr. Prasenjit Chanak</b></h4> 
              <p>Member</p>
<p>Dept. of Computer Science & Engineering, IIT (BHU) Varanasi</p> 
            </div>
        </div>
        </div>
        </div>
        </div>

    )
}

export default Abtteam;