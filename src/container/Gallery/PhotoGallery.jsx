import React, { useState } from "react";
import { GalleryImages } from "../../constants/index";
import Gallery from "react-photo-gallery";

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

  return (
    <div className="img-container">
      <Gallery photos={currentPhotos} />
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          &laquo;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &raquo;
        </button>
      </div>
    </div>
  );
}

export default PhotoGallery;
