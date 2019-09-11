import React from "react";
import "./SearchBar.scss";

const SearchBar = props => {
  return (
    <nav>
      <div className="nav-wrapper Searchbar">
        <form action="">
          <div className="input-field">
            <input
              id="search"
              type="search"
              className="Searchbar__search"
              placeholder="Teclea la película para buscar"
              required
              onChange={props.onChange}
            />
            <label className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons" onClick={props.closeSearchbar}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
