import React from "react";

function SearchBar() {
  return (
    <div className="input-group flex-nowrap">
      <div className="input-group-prepend"></div>
      <input
        type="text"
        className="form-control"
        placeholder="Type book title here"
        onKeyPress={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
