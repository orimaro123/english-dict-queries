/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import { titleCss } from "../../styles/title";

import storeInstance from "../../store/store";

const Queries = observer(() => {
  return (
    <div>
      {storeInstance.currentWord && (
        <div>
          <h2 css={titleCss}>Queries</h2>
          <div>
            Words that start with {storeInstance.currentWord}:
            {storeInstance.startLetterCount()}
          </div>
          <div>
            {storeInstance.endLetterCount()} words end with "{storeInstance.currentWord}"{" "}
          </div>
          <div>
            {storeInstance.currentWord} appears in dictionary:{" "}
            {storeInstance.timesIncludedCount()} times
          </div>
          <div>
            Words that have the same letter repeated in conjunction:
            {storeInstance.repeatedLetterCount()}
          </div>
        </div>
      )}
    </div>
  );
});

export default Queries;
