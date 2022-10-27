import { React, useState } from "react";

import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import "./searchBar.css";

const SearchBox = () => {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value.trim());
  };

  const handleSubmit = () => {
     Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`).then(
      (response) => {
        setData(response.data[0]);
        console.log(response)
      }
    ); 

    setSearchWord("");
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchWord}
        placeholder="Search..."
        onChange={handleChange}
        onKeyPress={handleKeypress}
      />
      <button onClick={handleSubmit}>
        <FaSearch size="20px" />
      </button>
    </div>
  );
};

export default SearchBox;
