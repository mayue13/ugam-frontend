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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        distinctio fugiat alias iure qui, commodi minima magni ullam aliquam
        dignissimos?
      </p>
      <a href={Common.RegistrationUrl} target="blank">
        Click to Register
      </a>
    </div>
  );
};

export default RegistrationPopup;
