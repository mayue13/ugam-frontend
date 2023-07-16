import React, { useState } from "react";
import { GalleryImages } from "../../constants/index";
//import Gallery from "react-photo-gallery";
import { Carousel } from "react-carousel-minimal";

function PhotoGallery() {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(GalleryImages.length / itemsPerPage);
  const currentPhotos = GalleryImages.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    // <div className="img-container">
    //   {/* <Gallery photos={currentPhotos} /> */}
    //   <div className="pagination">
    //     <button onClick={handlePreviousPage} disabled={currentPage === 1}>
    //       &laquo;
    //     </button>
    //     {Array.from({ length: totalPages }, (_, index) => (
    //       <button
    //         key={index + 1}
    //         onClick={() => handlePageChange(index + 1)}
    //         className={currentPage === index + 1 ? "active" : ""}
    //       >
    //         {index + 1}
    //       </button>
    //     ))}
    //     <button onClick={handleNextPage} disabled={currentPage === totalPages}>
    //       &raquo;
    //     </button>
    //   </div>
    // </div>
    <div>
      <Carousel
        data={GalleryImages}
        time={2000}
        width="850px"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </div>
  );
}

export default PhotoGallery;
