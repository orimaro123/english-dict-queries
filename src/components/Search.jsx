/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { useRef, useEffect } from "react";
import { inputCss } from "../styles/styles";
import storeInstance from "../store/store";
import { debounce } from "lodash";

export const Search = observer(() => {
  const debouncedSearch = useRef(
    debounce((value) => {
      storeInstance.updateWord(value);
    }, 500)
  ).current;

  const handleChange = (e) => {
    debouncedSearch(e.target.value.trim().toLowerCase());
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <input css={inputCss} type="text" placeholder="Search..." onChange={handleChange} />
  );
});
