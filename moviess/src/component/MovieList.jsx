import React, { useState } from "react";
import Card from "./Card";

const MovieList = ({ search,movies }) => {

  return (
    <div className="list">
      {movies.filter((el) => el.name.toLowerCase().includes(search.toLowerCase())).map((el) => (<Card el={el} />))}
    </div>
  );
};

export default MovieList;