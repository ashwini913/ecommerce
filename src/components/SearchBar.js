import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  let [term, setTerm] = useState("");
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="container">
          <input
            type="text"
            className="search_bar"
            value={term}
            onChange={onInputChange}
            placeholder="search..."
          ></input>
          <button className="search_button">
            <i className="ui mini search icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
