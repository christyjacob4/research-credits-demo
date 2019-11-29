import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";

export default function({ setCurrentImage, photos, setCurrentIndex }) {
  return (
    <div>
      <Gallery
        photos={photos}
        onClick={(e, { photo, index }) => {
          console.log("INDEX : ", index)
          setCurrentImage(photo.src);
          setCurrentIndex(index)
        }}
        // columns={1}
        margin={3}
        direction={'row'}
      />
    </div>
  );
}
