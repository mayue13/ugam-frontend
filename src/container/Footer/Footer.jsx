import React, { useState } from "react";
import { send } from "emailjs-com";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper/index";
import "./Footer.scss";
import SocialMediaContact from "../../components/SocialMedia/SocialMediaContact";
import { EmailTemplate } from "../../constants/index";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [toSend, setToSend] = useState({
    name: "",
    to_name: "Mayur",
    message: "",
    email: "",
    mobile: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, mobile, message } = formData;

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isMobileValid = /^\d{10}$/.test(mobile);
    if (!isEmailValid || !isMobileValid) {
      return;
    }
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

    e.preventDefault();
    send(
      EmailTemplate.SERVICE_ID,
      EmailTemplate.TEMPLATE_ID,
      toSend,
      EmailTemplate.USER_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <h2 className="head-text">
        <span>Contact Us</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <SocialMediaContact />
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className={`p-text ${
                email && !/\S+@\S+\.\S+/.test(email) ? "invalid" : ""
              }`}
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            {email && !/\S+@\S+\.\S+/.test(email) && (
              <p className="error-message">Invalid email</p>
            )}
          </div>
          <div className="app__flex">
            <input
              className={`p-text ${
                mobile && !/^\d{10}$/.test(mobile) ? "invalid" : ""
              }`}
              type="tel"
              placeholder="Your Mobile Number"
              name="mobile"
              value={mobile}
              onChange={handleChangeInput}
            />
            {mobile && !/^\d{10}$/.test(mobile) && (
              <p className="error-message">Invalid mobile</p>
            )}
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button className="p-text" type="button" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for get in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
