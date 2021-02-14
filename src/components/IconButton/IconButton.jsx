import React from "react";

import "./IconButton.scss";

const IconButton = ({ imagePath, imageName }) => {
  return (
    <button className="icon-image-button">
      <img className="icon-image-photo" src={imagePath} alt={imageName} />
    </button>
  );
};

export default IconButton;
