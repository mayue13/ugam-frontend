import React, { useState, useEffect } from "react";
import { GalleryImages } from "../../constants/index";
import Gallery from "react-photo-gallery";

function PhotoGallery() {
  const itemsPerPage = 7;
  const totalPages = Math.ceil(GalleryImages.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPhotos = GalleryImages.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="img-container">
      <Gallery photos={currentPhotos} />
    </div>
  );
}

export default PhotoGallery;
