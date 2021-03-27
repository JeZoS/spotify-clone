import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="playing">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1pCGqFmgfxRdyCZt4yDqVxX1pftB_E3QOw&usqp=CAU"
          alt=""
        />
        <h5>Lately</h5>
        <i className="fas fa-heart"></i>
        <i class="far fa-window-maximize"></i>
      </div>
      <div className="controls">
        <div className="play-buttons">
          <i class="fas fa-random"></i>
          <i class="fas fa-step-backward"></i>
          <i class="fas fa-play-circle"></i>
          <i class="fas fa-step-forward"></i>
          <i class="fas fa-retweet"></i>
        </div>
        <div className="seek"></div>
      </div>
      <div className="options">
        <i class="fas fa-mobile"></i>
        <i class="fas fa-stream"></i>
        <i class="fas fa-volume-up"></i>
        <div className="vol-seek"></div>
      </div>
    </div>
  );
};

export default Footer;
