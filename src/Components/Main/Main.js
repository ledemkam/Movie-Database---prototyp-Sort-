import React, { useState } from "react";
import Header from "../Header/Header";
import movies from "../../Data";
import Card from "../Card/Card";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([...movies]);
  const [search, setSearch] = useState("");

  const filterMovie = data.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const handlSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAscend = () => {
    let datasort = [...movies];
    datasort.sort((a, b) => Number(a.year) - Number(b.year));
    setData(datasort);
  };

  const handleDescend = () => {
    const datasort = [...movies];
    datasort.sort((a, b) => Number(b.year) - Number(a.year));
    setData(datasort);
  };

  const handleBestRate = () => {
    const datasort = [...movies];
    datasort.sort((a, b) => Number(b.rate) - Number(a.rate));
    setData(datasort);
  };

  const handleAZ = () => {
    const datasort = [...movies];
    datasort.sort((a, b) => (a.title - b.title ? 1 : -1));
    setData(datasort);
  };

  const handleZA = () => {
    const datasort = [...movies];
    datasort.sort((a, b) => (b.title - a.title ? 1 : -1));
    setData(datasort);
  };

  return (
    <div className="Main">
      <div className="contain-input">
        <input
          type="text"
          className="input"
          placeholder="....film suchen"
          onChange={handlSearch}
        />
      </div>
      <Header
        handleAscend={handleAscend}
        handleDescend={handleDescend}
        handleBestRate={handleBestRate}
        handleAZ={handleAZ}
        handleZA={handleZA}
      />
      {
        <div className="main-contain">
          {filterMovie.map((movie) => {
            return <Card movie={movie} key={movie.title} />;
          })}
        </div>
      }
    </div>
  );
};

export default Main;
