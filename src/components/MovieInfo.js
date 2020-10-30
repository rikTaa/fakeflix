import React from "react";

const MovieInfo = (props) => {
  return (
    <div className="container movieInfo">
      <div
        className="backBtn"
        onClick={props.closeMovieInfo}
        style={{ cursor: "pointer" }}
      >
        <p style={{ marginLeft: 10 }}>
          <i className="fas fa-arrow-left"></i>Go back
        </p>
      </div>
      <div className="poster">
        {props.currentMovie.poster_path == null ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            alt="Card Image"
            className="cardImg"
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`}
            alt="Card Image"
            className="cardImg"
          />
        )}
        <div>
          <div className="infoContainer">
            <h3>Title:</h3> <p>{props.currentMovie.title}</p>
            <h3>Release date:</h3> <p>{props.currentMovie.release_date}</p>
            <h3>Discription:</h3> <p>{props.currentMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
