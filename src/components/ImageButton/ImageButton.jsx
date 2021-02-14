import React from "react";

import "./ImageButton.scss";

const ImageButton = ({ imagePath, imageName }) => {
  return (
    <button className="complete-image-button">
      <img className="complete-image-photo" src={imagePath} alt={imageName} />
    </button>
  );
};

export default ImageButton;
