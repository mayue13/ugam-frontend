import React, { useState } from "react";
import { Common } from "../../constants/index";

const RegistrationPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Render nothing if the pop-up is closed
  }

  return (
    <div className="popup">
      <button id="close" onClick={closePopup}>
        &times;
      </button>
      <h2>Registration Open</h2>
      <p>
        Registration for members is currently available. To register, simply
        click the link below.
      </p>
      <a href={Common.RegistrationUrl} target="blank">
        Click to Register
      </a>
    </div>
  );
};

export default RegistrationPopup;
