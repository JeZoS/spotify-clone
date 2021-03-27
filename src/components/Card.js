import React from "react";

const Card = ({ card: { file, title, subtitle } }) => {
  return (
    <div className="recent-card">
      <img src={file} alt="" />
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
