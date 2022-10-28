/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Results from "./components/results/Results";
import Top from "./components/top/Top";

function App() {
  return (
    <div
      css={css`
        padding-top: 10px;
        border: 3px solid red;
      `}
    >
      <Top />
      <Results />
    </div>
  );
}

export default App;
