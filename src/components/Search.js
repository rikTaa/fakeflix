import React from "react";

const Search = (props) => {
  return (
    <div className="search container">
      <form action="" onSubmit={props.handleSubmit} className="searchForm">
        <input
          placeholder="Search..."
          type="text"
          className="search"
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};
export default Search;
