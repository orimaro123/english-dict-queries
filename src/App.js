import Top from "./components/top/Top";
import { createContext } from "react";
import storeInstance from "./store/store";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Results from "./components/results/Results";

export const StoreContext = createContext();

function App() {
  return (
    <StoreContext.Provider value={storeInstance}>
      <div
        css={css`
          padding-top: 10px;
          border: 3px solid red;
        `}
      >
        <Top />
        <Results />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
