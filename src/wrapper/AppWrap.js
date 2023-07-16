import React from "react";
import { SocialMedia, NavigationDots } from "../components/index";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@{new Date().getFullYear()} Ugam</p>
            <div className="design-by">
              {idName === "contact" && (
                <p className="p-text">
                  Made With 💝 By&nbsp;&nbsp;
                  <a
                    href="https://www.instagram.com/mayue.dahake/"
                    target="blank"
                  >
                    Mayur Dahake
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
