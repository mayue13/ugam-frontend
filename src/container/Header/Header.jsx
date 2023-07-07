import React, { useState } from "react";
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
      {showPopup && <RegistrationPopup onClose={closePopup} />}
    </div>
  );
}

export default AppWrap(Header, "home");
