import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsWhatsapp,
  BsFillTelephoneFill,
} from "react-icons/bs";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://wa.me/918483828192"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp />
        </a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <BsFacebook />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/ugam_trust_pune"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <BsYoutube />
        </a>
      </div>
      <div>
        <a href="tel:+918483828192" target="_blank" rel="noopener noreferrer">
          <BsFillTelephoneFill />
        </a>
      </div>
    </div>
  );
}
