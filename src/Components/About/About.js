import React from "react"; 
import './About.css'
import Navigation from '../Navigation/Navigation.js';
const About = () => {
   return (
     <div>
       
         <div className="card">
    <div className="image">
      <img src="https://sepehrdev.netlify.app/profile.6ee28169.a55f5427.jpg" alt="Me"/>
    </div>
    <div className="details">
      <div className="center">
        <h1>Someone famous<span>team leader</span></h1>
        <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
        <ul>
          <li><a href="twitter://user?screen_name=<sepehr ahmadi>" className="twitter" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="https://sepehrdev.netlify.app/" className="google" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a className="insta"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <Navigation/>
           </div>
   );
}

export default About;