import React from "react";
import TVShow from "./TVShow";

const TVList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.tv.map((tv, i) => {
          return (
            <TVShow
              key={i}
              viewTVInfo={props.viewTVInfo}
              tvId={tv.id}
              image={tv.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TVList;
