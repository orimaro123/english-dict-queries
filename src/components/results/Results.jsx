/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { sectionCss } from "../../styles/styles";

import WordStats from "../wordStats/WordStats";
import storeInstance from "../../store/store";

const Results = observer(() => {
  console.log(storeInstance.times)
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <section
        css={sectionCss}
        style={{ padding: "0 6em", width: "30rem", height: "35rem" }}
      >
       {storeInstance.timesAppeared >0 ?<WordStats/>: <div>Please enter a valid</div>}
      </section>
    </div>
  );
});

export default Results;
