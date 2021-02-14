import React from "react";

import "./Card.scss";

const Card = ({ imageUrl, title, onClick }) => {
  return (
    <div className="card">
      <button className="card-button" onClick={onClick}>
        <div className="card-image-container">
          <img className="card-image" src={imageUrl} alt={title} />
        </div>
        <div className="card-title-container">
          <p className="card-title">{title}</p>
        </div>
      </button>
    </div>
  );
};
export default Card;
