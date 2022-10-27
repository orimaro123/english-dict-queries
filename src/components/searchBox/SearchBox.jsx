import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBox.css";
import { StoreContext } from "../../App";

const SearchBox = () => {
  const [searchWord, setSearchWord] = useState("");

  const submitForm = (e, store) => {
    e.preventDefault();

    if (!searchWord) {
      alert("search term is required");
    } else {
      store.updateWord(searchWord);
      setSearchWord("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value.trim());
  };

  return (
    <StoreContext.Consumer>
      {(store) => (
        <form onSubmit={(e) => submitForm(e, store)}>
          <div className="search">
            <input
              type="text"
              value={searchWord}
              placeholder="Search..."
              onChange={handleChange}
            />
            <button>
              <FaSearch size="20px" />
            </button>
          </div>
        </form>
      )}
    </StoreContext.Consumer>
  );
};

export default SearchBox;
