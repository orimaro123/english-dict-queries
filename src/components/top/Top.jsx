/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import SearchBox from "../../components/searchBox/SearchBox";

const Top = () => {
  return (
    <header
      css={css`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 15px;
        background-color: #82f0ae;
      `}
    >
      <h1>Welcome to dictionary query</h1>
      <SearchBox />
    </header>
  );
};

export default Top;
