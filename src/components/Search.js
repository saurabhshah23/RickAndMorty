import React from "react";

const Search = props => {
  let { toggleSort, searchChar, sortAscending } = props.search;
  return (
    <div className="searchWrapper row">
      <div className="col-sm-8 my-2">
        <input
          className="form-control"
          type="text"
          placeholder="search character by Name"
          onChange={searchChar}
        />
      </div>
      <div className="col-sm-4 my-2">
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={toggleSort}
        >
          Sort by Id
          <span
            className={[
              sortAscending ? "rotateSignAscending" : "rotateSignDescending",
              "badge badge-primary ml-2 float-right"
            ].join(" ")}
          >
            &lt;
          </span>
        </button>
      </div>
    </div>
  );
};
export default Search;
