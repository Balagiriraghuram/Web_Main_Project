import React from "react";
import './AboutMe.css';

import img5 from './images/facebook.png';
import img6 from './images/instagram.png';
import img7 from './images/linkedin.png';
import img8 from './images/github (1).png';
function About(){

    return <div>
           <h1 id = "AboutMeTitle">AboutMe : </h1>
   <div id = "AboutMeHeader">
        Resume
   </div>
  <br></br>

   <div id = "containerParent">
    <div id="container">
      <h1 class="profile">Profile</h1>
      <hr></hr>
      <h4 class="label">Name :</h4> 
      <div class="containerText">Bala giri Raghuram</div>
      <h4 class="label">Date Of Birth :</h4>
      <div class="containerText"> 22 - sep - 2004</div>
      <h4 class="label">Address :</h4>
      <div class="containerText"> Vijayawada , Krishna distric, AP</div>
      <h4 class="label">Phone No :</h4>
      <div class="containerText"> +91 9701324083</div>
      <h4 class="label">Email :</h4>
       <div class="containerText"> balagiri9129@gmail.com</div>
      <br></br>
       <hr></hr>
       <h1 class="profile">Social Media Links : </h1>
       <div className="AboutMeIcons" >
                 <a href="" style={{margin:'10px'}}><img src={img5}  alt='facebook icon'   height={"70px"}/></a>

                 <a href="" style={{margin:'10px'}}><img src={img6}  alt='instagram icon'   height={"70px"}/></a>

                 <a href="https://www.linkedin.com/in/bommina-bala-giri-raghuram-311007271/" style={{margin:'10px'}}><img src={img7}  alt='linkedin icon'   height={"70px"}/></a>

                 <a href="https://github.com/Balagiriraghuram" style={{margin:'10px'}}><img src={img8}  alt='github icon'   height={"70px"}/></a>
                </div>
    </div>

    <div id = "resumebody">
      <h1 class="profile">OBJECTIVE : </h1>
      <hr className="hr" ></hr>
      <div class="containerText"> Desire to work for the company which will help me to get an opportunity where I can
      make the best of my potential and contribute to the company’s growth by being organised,
      selfmotivated, capable of time management and can work under pressure in all environments.  </div> 
      <br></br>
     <br></br>
      <h1 class="profile">EDUCATION : </h1>
      <hr></hr>
      <table className="table" >
        
        <thead className="thead" >
          <tr>
            <th style={{color:"red"}}>Education Level</th>
            <th style={{color:"red"}}>Course</th>
            <th style={{color:"red"}}>Collage / School Name</th>
            <th style={{color:"red"}}>Place</th>
            
          </tr>
        </thead>
        <tr>
          <td>Bachelors of technology</td>
          <td> Electronics and communication engineering (With CGPA-8.1)</td>
          <td>National Institute of Technology Patna</td>
          <td>Bihar </td>
          
        </tr>
        <tr>
          <td>Board of Intermediate Education</td>
          <td>MPC</td>
          <td>Narayana junior collage</td>
          <td>Vijayawada  </td>
         
        </tr>
        <tr>
          
          <td>High School Education</td>
          <td>-</td>
          <td>Sri Chaitanya high school</td>
          <td>Vijayawada </td>
          
        </tr>
      </table>
   
    <br></br>
    <br></br>
      <h1 className="profile">SKILLS : </h1>
      <hr></hr>
      <h4 className="label">Languages :</h4>
      <div className="containerText">C , Java , JAVASCRIPT , KOTLIN , PYTHON</div>
     <br></br>
      <h4 className="label">Tool kits :</h4>
      <div className="containerText">ANDROID STUTIO, VS code ,  </div>
     <br></br>
      <h4 className="label">WEB Development :</h4>
      <div className="containerText"> HTML , CSS , JavaScript , JQuery , Node JS , React JS , DATA MANAGEMENT by MYSQL </div>
    
     <br></br>
     <br></br>
      <h1 className="profile">PROJECTS : </h1>
      <hr></hr>
      <h4 className="label">Form submission</h4>
      <div className="containerText"> HTML , CSS , JavaScript  </div>
      <h4 className="label">Rolling dice game</h4>
      <div className="containerText"> HTML , CSS , JavaScript </div>
      <h4 className="label">Introducing My Village</h4>
      <div className="containerText"> HTML , CSS , JavaScript , React JS  </div>
      <h4 className="label">Secreacts of my village</h4>
      <div className="containerText"> Node JS , DATA MANAGEMENT by MYSQL </div>

      <br></br>
     <br></br>
      <h1 className="profile">DECLARATION  : </h1>
      <hr></hr>
      <div className="containerText">I hereby declare that all above Information is correct to the best of my knowledge and I
      take the responsibilities for the correctness of the above information. </div>
      <br></br>
      <br></br>
      <div className="containerText sign">B.Bala giri raghuram</div>
    </div>
    </div>
   </div>

}

export default About ;