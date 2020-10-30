import React from "react";

const SearchT = (props) => {
  return (
    <div className="search container">
      <form action="" onSubmit={props.handleTvSubmit} className="searchForm">
        <input
          placeholder="Search..."
          type="text"
          className="search"
          onChange={props.handleTVChange}
        />
      </form>
    </div>
  );
};
export default SearchT;
