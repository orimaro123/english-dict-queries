import { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { getDefByWord } from "../../store/dictService";
import { StoreContext } from "../../App";

import React from "react";

const DictDefinition = observer(() => {
  const store = useContext(StoreContext);

  const updateDefinitions = async (word) => {
    const response = await getDefByWord(word);
    if (!response) {
      store.updateCurrentDefinition(["failed to request"]);
    } else if (response.status === 200) {
      const wordDef = response.data[0].meanings[0].definitions[0].definition;

      if (Object.keys(wordDef).length > 0) {
        console.log(wordDef)
        store.updateCurrentDefinition(wordDef);
      } else {
        store.updateCurrentDefinition(["missing definition"]);
      }
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    if (store.currentWord && store.currentWord !== "") {
      updateDefinitions(store.currentWord);
      console.log(store)
    }
  }, [store.currentWord]);
  return <div>{store.currentWordDef}</div>;
});

export default DictDefinition;
