import { React, useState } from "react";

import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import "./searchBar.css";

import { StoreContext } from "../../App";

const SearchBox = () => {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value.trim());
  };

  const handleSubmit = (e, store) => {
    e.preventDefault();
    if (!searchWord) {
      alert("search term is required");
    } else {
      store.updateWord(searchWord);
      setSearchWord("");
    }
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  return (
    <StoreContext.Consumer>
      {(store) => (
        <div className="search">
          <input
            type="text"
            value={searchWord}
            placeholder="Search..."
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
          <button onClick={(e) => handleSubmit(e, store)}>
            <FaSearch size="20px" />
          </button>
        </div>
      )}
    </StoreContext.Consumer>
  );
};

export default SearchBox;
