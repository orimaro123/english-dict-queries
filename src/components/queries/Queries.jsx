import React, { useContext } from "react";
import { observer } from "mobx-react";

import QueriesTitle from "../queriesTitle/QueriesTitle";
import { StoreContext } from "../../App";

const Queries = observer(() => {
  const store = useContext(StoreContext);
  const letter = () => {
    if (store.currentWord) {
      return <span>"{store.currentWord}"</span>;
    } else {
      return (
        <span>
          {"<"}letter to be searched{">"}
        </span>
      );
    }
  };

  return (
    <div>
      {store.currentWord && (
        <div>
          <QueriesTitle title="Stats" />
          <div>
            Words that start with {letter()} : {store.startLetterCount}
          </div>
          <div>
            Words that end with {letter()} : {store.endLetterCount}
          </div>
          <div>
            Times that {letter()} appears in dictionary: {store.timesIncludedCount}
          </div>
          <div>
            Words that have the same letter repeated in conjunction:
            {store.repeatedLetterCount}
          </div>
        </div>
      )}

      {store.currentWordDef.length > 0}
    </div>
  );
});

export default Queries;
