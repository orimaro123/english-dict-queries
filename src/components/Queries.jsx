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
            <span css={wordCss}>{storeInstance.startAppeared}</span> words start with
            <span css={wordCss}>"{storeInstance.currentWord}"</span>
          </div>
          <div>
            <span css={wordCss}>{storeInstance.endAppeared}</span> words end with
            <span css={wordCss}>"{storeInstance.currentWord}"</span>
          </div>
          <div>
            
          
            <span css={wordCss}> "{storeInstance.currentWord}"</span> appear in <span css={wordCss}>{storeInstance.timesAppeared}</span> words
          </div>
          <div>
 
            <span css={wordCss}>{storeInstance.repeatedCount}</span> words have 
            <span css={wordCss}> "{storeInstance.currentWord}"</span> repeated in
            conjunction
          </div>
        </div>
      )}
    </div>
  )
);


