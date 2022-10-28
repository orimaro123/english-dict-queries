import { observer } from "mobx-react";

import storeInstance from "../../store/store";

const Queries = observer(() => {
  return (
    <div>
      {storeInstance.currentWord && (
        <div>
          <h2
            css={{
              textTransform: "uppercase",
              color: "#4183f2",
              fontWeight: 500,
              letterSpacing: "0.5px",
              lineHeight: "40px",
            }}
          >
            Queries
          </h2>
          <div>
            Words that start with {storeInstance.currentWord}:{" "}
            {storeInstance.startLetterCount()}
          </div>
          <div>Words that end with : {storeInstance.endLetterCount()}</div>
          <div>
            Times that appears in dictionary: {storeInstance.timesIncludedCount()}
          </div>
          <div>
            Words that have the same letter repeated in conjunction:
            {storeInstance.repeatedLetterCount()}
          </div>
        </div>
      )}
    </div>
  );
});

export default Queries;
