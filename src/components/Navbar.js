import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <i class="fab fa-spotify"></i>
        <h3>Spotify</h3>
      </div>
      <div className="nav-links">
        <div>
          <i className="fas icon fa-home" /> Home
        </div>
        <div>
          <i className="fas icon fa-search" /> Search
        </div>
        <div>
          <i class="fas icon fa-archive"></i> Your Library
        </div>
      </div>
      <div className="CPLS">
        <div>
          <i class="fas icons fa-plus-square"></i>Create
          Playlist
        </div>
        <div>
          <i class="fas icons fa-hand-holding-heart"></i>
          Liked Songs
        </div>
      </div>
      <div className="line-br"></div>
    </nav>
  );
};

export default Navbar;
