import React, { useEffect } from "react";
import logo from "./../assets/images/logo.png";
import "./../assets/css/splash.css";
import "animate.css";
export default function Splash({ handleStepChange }) {
  setTimeout(() => {
    handleStepChange("next");
    const splashContainer = document.querySelector(".splash_container");
    splashContainer.classList.add("modified");
  }, 3000);
  // useEffect(() => {
  //   const splashContainer = document.querySelector(".splash_container");
  //   setTimeout(() => {
  //     splashContainer.classList.add("modified");
  //   }, 6000); // Adjust the value (in milliseconds) to match your animation-delay
  // }, []);
  return (
    <div className="splash_container d-flex flex-column justify-content-center align-items-center">
      <img
        class="animate__animated animate__zoomIn"
        src={logo}
        width="50%"
      ></img>
      <div className="sub_heading_text animate__animated animate__flipInX animate__delay-3s animate__flipOutX">
        <i>The Art of Finest Skincare</i>
      </div>
    </div>
  );
}
