import React from "react";

const TVShow = (props) => {
  return (
    <div className="movies">
      <div className="container">
        <div className="poster">
          <div className="poster__img">
            {props.image == null ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`}
                alt="card image"
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={`https://image.tmdb.org/t/p/w500${props.image}`}
                onClick={() => props.viewTVInfo(props.tvId)}
                alt="card image"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShow;
