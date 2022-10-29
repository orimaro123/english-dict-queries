/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { divTitleCss, articleCss } from "../styles/styles";
import { Queries } from "./Queries";
import { PieChart } from "./Chart";
import storeInstance from "../store/store";

export const WordStats = observer(() => (
  // <article css={articleCss}>
  <div>
    <h2 style={{ fontSize: "25px", color: "#4183f2" }}>
      You are looking for
      <span style={{ textTransform: "uppercase" }}> "{storeInstance.currentWord}"</span>
    </h2>
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <h2 css={divTitleCss}>Queries</h2>
      <Queries />
      <div>
        <h2 css={divTitleCss}>Stats</h2>
        <PieChart />
      </div>
    </div>
  </div>
  // </article>
));
