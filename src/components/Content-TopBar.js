import React from "react";

const ContentTopBar = () => {
  return (
    <div className="contentTopbar">
      <div className="arrows">
        <i class="fas fa-chevron-circle-left"></i>
        <i class="fas fa-chevron-circle-right"></i>
      </div>
      <div className="barId">
        <div className="pill1">UPGRADE</div>
        <div className="pill2">
          <i className="fas fa-user-circle"></i>
          Prabhat Kumar{" "}
          <i className="fas fa-caret-down"></i>
        </div>
        <i className="fas hidden fa-user-circle"></i>
      </div>
    </div>
  );
};

export default ContentTopBar;
