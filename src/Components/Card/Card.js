import React from "react";
import "./Card.css";

const Card = ({ movie }) => {
  return (
    <ul className="card">
      <li>{movie.title}</li>
      <li>{movie.year}</li>
      <li>{movie.director}</li>
      <li>{movie.duration}</li>
      <li>★&#8194;{movie.rate}</li>
      <li className="genre">{movie.genre[0]}</li>
      <li className="genre">{movie.genre[1]}</li>
      <li className="genre">{movie.genre[2]}</li>
      <li className="genre">{movie.genre[3]}</li>
    </ul>
  );
};

export default Card;
