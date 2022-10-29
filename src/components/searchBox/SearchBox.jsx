/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { inputCss, buttonCss, searchDivCss } from "../../styles/styles";
import storeInstance from "../../store/store";

const SearchBox = observer(() => {
  const [searchWord, setSearchWord] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (!searchWord) {
      alert("Please enter a word to search");
    } else {
      storeInstance.updateWord(searchWord.toLowerCase());
      setSearchWord("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    setSearchWord(e.target.value.trim());
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div css={searchDivCss}>
        <input
          css={inputCss}
          type="text"
          value={searchWord}
          placeholder="Search..."
          onChange={handleChange}
        />
        <button css={buttonCss}>
          <FaSearch size="20px" />
        </button>
      </div>
    </form>
  );
});

export default SearchBox;
