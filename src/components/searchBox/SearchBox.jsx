import { React, useState } from "react";

import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import "./searchBar.css";

const SearchBox = () => {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  function getMeaning() {
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`).then(
      (response) => {
        setData(response.data[0]);
      }
    );
    console.log(data);
  }

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMeaning();
          }}
        >
          <FaSearch size="20px" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
