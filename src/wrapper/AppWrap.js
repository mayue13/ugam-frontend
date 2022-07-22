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
            <p className="p-text">@{new Date().getFullYear()} ExploreMD</p>
          </div>

        </div>
         <NavigationDots active={idName}/>
      </div>
    );
  };

export default AppWrap;
