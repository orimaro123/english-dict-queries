/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { VscError } from "react-icons/vsc";
import { observer } from "mobx-react";
import { sectionCss } from "../styles/styles";
import { WordStats } from "./WordStats";
import storeInstance from "../store/store";

export const Results = observer(() => (
  <section
    style={{
      display: "flex",
      justifyItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
        justifySelf: "center",
        width: "500px",
      }}
    >
      {storeInstance.currentWord.length > 0 ? (
        <article css={sectionCss}>
          {storeInstance.timesAppeared > 0 ? (
            <WordStats />
          ) : (
            <div>
              <h1>
                {storeInstance.currentWord.toUpperCase()} Not found
                <VscError style={{ marginLeft: "2px" }} />
              </h1>

              <span style={{ fontWeight: "bold" }}>Please search a valid word</span>
            </div>
          )}
        </article>
      ) : (
        <div css={sectionCss}>
          <h1>
            <p> Hi there! </p>
            <p style={{ marginTop:"10px" }}>Enter a word or a letter you would like to check</p>
          </h1>
        </div>
      )}
    </div>
  </section>
));
