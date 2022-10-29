/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { headerCss } from "../../styles/styles";
import SearchBox from "../../components/searchBox/SearchBox";

const Top = () => {
  return (
    <header css={headerCss}>
      <h1>Welcome to dictionary query app!</h1>
      <h2 style={{ marginBottom: "10px" }}>
        Enter a word or a letter you would like to check
      </h2>
      <SearchBox />
    </header>
  );
};

export default Top;
