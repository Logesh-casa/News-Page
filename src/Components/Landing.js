import React from "react";
import "../Css/Landing.css";
import background from "../assets/images/image-web-3-desktop.jpg";

const Landing = () => {
   return (
      <div>
         <div className="landing-image">
            <img src={background} />
         </div>
         <div className="landing-content">
            <div className="landing-heading">
               The Bright <br></br>
               Future of <br></br>
               Web 3.0? <br></br>
            </div>
            <div className="landing-description-wrapper">
               <div className="landing-description">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
               </div>
               <button className="readmore-button">READ MORE</button>
            </div>
         </div>
      </div>
   );
};

export default Landing;
