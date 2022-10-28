import { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../App";
import Queries from "../queries/Queries";
import DictDefinition from "../dictDefinition/DictDefinition";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const Results = observer(() => {
  const store = useContext(StoreContext);
  return (
    <section
      css={css`
        height: 300px;
        display: flex;
        padding: 30px;
      `}
    >
      <article
        css={css`
          display: flex;
          flex: 1 1 80px;
          justify-content: center;
        `}
      >
        {store.currentWord && <Queries />}
      </article>
      <aside
        css={css`
          display: flex;
          flex: 1 1 80px;
          justify-content: center;
        `}
      >
        Definition
        {store.currentWord && <DictDefinition />}
      </aside>
    </section>
  );
});

export default Results;
