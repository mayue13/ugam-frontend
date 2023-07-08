import { GalleryImages } from "../../constants/index";
import Gallery from "react-photo-gallery";

function PhotoGallery() {
  return (
    <>
      <Gallery photos={GalleryImages} />
    </>
  );
}

export default PhotoGallery;
