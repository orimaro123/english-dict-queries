import { useEffect } from "react";
import { observer } from "mobx-react";
import { getDefByWord } from "../../service/dictService";

import storeInstance from "../../store/store";

import React from "react";

const DictDefinition = observer(() => {
  const updateDefinitions = async (word) => {
    const response = await getDefByWord(word);
    if (!response) {
      storeInstance.updateCurrentDefinition(["failed to request"]);
    } else if (response.status === 200) {
      const wordDef = response.data[0].meanings[0].definitions[0].definition;

      if (Object.keys(wordDef).length > 0) {
        storeInstance.updateCurrentDefinition(wordDef);
      } else {
        storeInstance.updateCurrentDefinition(["missing definition"]);
      }
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    if (storeInstance.currentWord && storeInstance.currentWord !== "") {
      updateDefinitions(storeInstance.currentWord);
    }
  }, [storeInstance.currentWord]);
  return (
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
        Definition
      </h2>
      <div>{storeInstance.currentWordDef}</div>
    </div>
  );
});

export default DictDefinition;
