import React from "react";
import "./Header.css";

const Header = ({
  handleAscend,
  handleDescend,
  handleBestRate,
  handleAZ,
  handleZA,
}) => {
  return (
    <div className="Header">
      <h1>Movie Database</h1>

      <div className="sortierButton-contain">
        <button className="dateas" onClick={handleAscend}>
          Sort by Date Ascending
        </button>
        <button className="dateascending" onClick={handleDescend}>
          Sort by Date Descending
        </button>
        <button className="bestrate" onClick={handleBestRate}>
          Best Rate
        </button>
        <button className="a-z" onClick={handleAZ}>
          A-Z
        </button>
        <button className="z-a" onClick={handleZA}>
          Z-A
        </button>
      </div>
    </div>
  );
};

export default Header;
