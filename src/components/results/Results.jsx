/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { sectionCss } from "../../styles/styles";

import WordStats from "../wordStats/WordStats";
import storeInstance from "../../store/store";

const Results = observer(() => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <section css={sectionCss}>
        {storeInstance.timesAppeared > 0 ? (
          <WordStats />
        ) : (
          <div>Please enter a valid word</div>
        )}
      </section>
    </div>
  );
});

export default Results;
