/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { wordCss } from "../styles/styles";
import { observer } from "mobx-react";

import storeInstance from "../store/store";

export const Queries = observer(() => (
    <div>
      {storeInstance.currentWord && (
        <div>
          <div>
            <span css={wordCss}>{storeInstance.startLetterCount()}</span> words start with
            <span css={wordCss}>"{storeInstance.currentWord}"</span>
          </div>
          <div>
            <span css={wordCss}>{storeInstance.endLetterCount()}</span> words end with
            <span css={wordCss}>"{storeInstance.currentWord}"</span>
          </div>
          <div>
            <span css={wordCss}>{storeInstance.timesIncludedCount()}</span>"
            {/*put text inside element*/}
            <span css={wordCss}>{storeInstance.currentWord}</span>" appear in the
            dictionary
          </div>
          <div>
            {/*put text inside element*/}
            <span css={wordCss}>{storeInstance.repeatedLetterCount()}</span> words have "
            <span css={wordCss}>{storeInstance.currentWord}</span>" repeated in
            conjunction
          </div>
        </div>
      )}
    </div>
  )
);

