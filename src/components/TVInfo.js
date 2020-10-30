import React from "react";

const TVInfo = (props) => {
  return (
    <div className="container tvInfo">
      <div
        className="backBtn"
        onClick={props.closeTVInfo}
        style={{ cursor: "pointer" }}
      >
        <p style={{ marginLeft: 10 }}>
          <i className="fas fa-arrow-left"></i>Go back
        </p>
      </div>
      <div className="poster">
        {props.currentTV.poster_path == null ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            alt="Card Image"
            className="cardImg"
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={`https://image.tmdb.org/t/p/w500${props.currentTV.poster_path}`}
            alt="Card Image"
            className="cardImg"
          />
        )}
        <div>
          <div className="infoContainer">
            <h3>Title:</h3> <p>{props.currentTV.name}</p>
            <h3>First aired date:</h3> <p>{props.currentTV.first_air_date}</p>
            <h3>Discription:</h3> <p>{props.currentTV.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVInfo;
