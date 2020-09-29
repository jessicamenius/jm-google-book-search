import React from "react";

function SearchBar(props) {
  return (
    <div className="input-group flex-nowrap">
      <div className="input-group-prepend"></div>
      <input
        type="text"
        className="form-control"
        placeholder="Type book title here"
        onKeyPress={props.handleSearch}
      />
    </div>
  );
}

export default SearchBar;
s;
