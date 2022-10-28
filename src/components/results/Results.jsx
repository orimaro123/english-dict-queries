/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { observer } from "mobx-react";
import Queries from "../queries/Queries";
import storeInstance from "../../store/store";

import Chart from "../pieChart/PieChart";

const Results = observer(() => {
  return (
    <section
      css={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        width: "100%",

        "&:hover": {
          boxShadow: "0 8px 10px 1px rgba(22,0,0,0.9)",
        },
      }}
    >
      <article>{storeInstance.currentWord && <Queries />}</article>
      <aside>{storeInstance.currentWord.length > 0 && <Chart />}</aside>
    </section>
  );
});

export default Results;
