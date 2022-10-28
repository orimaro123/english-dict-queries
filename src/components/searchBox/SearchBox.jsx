import { observer } from "mobx-react";
import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBox.css";
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
  );
});

export default SearchBox;
