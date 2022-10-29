/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { VscError } from 'react-icons/vsc';
import { observer } from "mobx-react";
import { sectionCss } from "../styles/styles";
import { WordStats } from "./WordStats";
import storeInstance from "../store/store";

export const Results = observer(() =>
    <div style={{ display: "flex", justifyContent: "center", height: '100%' }}>
      {storeInstance.currentWord.length > 0 ?
      <section css={sectionCss} >
        {storeInstance.timesAppeared > 0 ? (
          <WordStats />
        ) : (
          <div>
            <div style={{  }}>
              <h1>No results found </h1>
              <VscError style={{ marginLeft: "2px" }}/>
            </div>
            <span>Please enter a valid word</span>
          </div>
        )}
      </section> :
        <div style={{ marginTop: "50px"}}>Enter a word or a letter you would like to check</div>}
    </div>
  );