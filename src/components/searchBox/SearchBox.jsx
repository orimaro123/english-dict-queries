/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import storeInstance from "../../store/store";

const SearchBox = observer(() => {
  const [searchWord, setSearchWord] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (!searchWord) {
      alert("search term is required");
    } else {
      storeInstance.updateWord(searchWord);
      setSearchWord("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    setSearchWord(e.target.value.trim());
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div
        css={{ width: "100%", display: "flex", justifyContent: "space-between" }}
        className="search"
      >
        <input
          css={{
            borderRadius: "5px",
            boxShadow: "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",
            width: "100%",
            padding: "10px",
            outline: "0",
          }}
          type="text"
          value={searchWord}
          placeholder="Search..."
          onChange={handleChange}
        />
        <button
          css={{
            padding: "15px 0",
            width: "25%",
            backgroundColor: "#ae9cff",
            border: "solid 1px black",
            outline: "none",
            color: "white",
            borderRadius: "5px",
            boxShadow: "inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1)",
            "&:hover": {
              cursor: "pointer",
            },
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <FaSearch size="20px" />
        </button>
      </div>
    </form>
  );
});

export default SearchBox;
