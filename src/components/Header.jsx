/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { headerCss } from "../styles/styles";
import { Search } from "./Search";

export const Header = () =>  (
    <header css={headerCss}>
      <h1>Welcome to dictionary query app!</h1>
      <Search />
    </header>
  );
