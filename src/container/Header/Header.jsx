import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { HeaderImages } from "../../constants/index";
import "./Header.scss";
import { AppWrap } from "../../wrapper/index";
import RegistrationPopup from "../RegistrationPopup/RegistrationPopup";

function Header() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="app__header app__flex">
      <div className="video-header">
        {/* <video loop autoPlay muted src={images.bgVideo4}></video> */}
        <div className="slider-container">
          <SimpleImageSlider
            width={896}
            height={504}
            images={HeaderImages}
            showBullets={true}
            showNavs={true}
          />
        </div>
        {showPopup && <RegistrationPopup onClose={closePopup} />}
      </div>
    </div>
  );
}

export default AppWrap(Header, "home");
