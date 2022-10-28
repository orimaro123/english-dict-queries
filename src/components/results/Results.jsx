/** @jsxRuntime classic */
/** @jsx jsx */
import { observer } from "mobx-react";
import Queries from "../queries/Queries";
import storeInstance from "../../store/store";

import { jsx, css } from "@emotion/react";
import Chart from "../pieChart/PieChart";

const Results = observer(() => {
  return (
    <section
      css={css`
        height: 300px;
        display: flex;
        padding: 30px;
        justify-content: center;
      `}
    >
      <article css={css``}>{storeInstance.currentWord && <Queries />}</article>
      <Chart />
    </section>
  );
});

export default Results;
