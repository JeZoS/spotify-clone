import React from "react";

const Tile = ({ tile: { file, title } }) => {
  return (
    <div className="morning-divs">
      <img src={file} alt="play1" />
      <h2>{title}</h2>
    </div>
  );
};

export default Tile;
