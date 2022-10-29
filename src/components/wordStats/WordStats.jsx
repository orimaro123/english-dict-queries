/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { divTitleCss, articleCss } from "../../styles/styles";
import Queries from "../queries/Queries";
import PieChart from "../pieChart/GoogleChart";
import storeInstance from "../../store/store";

const WordStats = observer(() => {
  return (
    <article css={articleCss}>
      <h2 style={{ fontSize: "35px", color: "#4183f2", marginBottom: "15px" }}>
        You are looking for
        <span style={{ textTransform: "uppercase" }}> "{storeInstance.currentWord}"</span>
      </h2>
      <div>
        <h2 css={divTitleCss}>Queries</h2>
     <Queries />
      </div>
      <div>
        <h2 css={divTitleCss}>Stats</h2>
       <PieChart />
      </div>
    </article>
  );
});

export default WordStats;
