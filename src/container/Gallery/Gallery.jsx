import React from "react";
import "./Gallery.scss";
import { AppWrap, MotionWrap } from "../../wrapper/index";
import PhotoGallery from "./PhotoGallery";

function Gallary() {
  return (
    <>
      <h2 className="head-text">
        <span>Gallery</span>
        <PhotoGallery></PhotoGallery>
      </h2>
    </>
  );
}

export default AppWrap(
  MotionWrap(Gallary, "app__skills"),
  "gallery",
  "app__whitebg"
);
