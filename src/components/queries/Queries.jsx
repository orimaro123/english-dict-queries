import React, { useContext } from "react";
import { observer } from "mobx-react";

import QueriesTitle from "../queriesTitle/QueriesTitle";
import { StoreContext } from "../../App";

const Queries = observer(() => {
  const store = useContext(StoreContext);

  return (
    <div>
      {store.currentWord && (
        <div>
          <QueriesTitle title="Queries statistics" />
          <div>Words that start with {store.startLetterCount}</div>
          <div>Words that end with : {store.endLetterCount}</div>
          <div>Times that appears in dictionary: {store.timesIncludedCount}</div>
          <div>
            Words that have the same letter repeated in conjunction:
            {store.repeatedLetterCount}
          </div>
        </div>
      )}
    </div>
  );
});

export default Queries;
