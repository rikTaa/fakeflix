import React from "react";
import Movies from "./Movies";

const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.movies.map((movie, i) => {
          return (
            <Movies
              key={i}
              viewMovieInfo={props.viewMovieInfo}
              movieId={movie.id}
              image={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
