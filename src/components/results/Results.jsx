import { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../App";
import Queries from "../queries/Queries";
import DictDefinition from "../dictDefinition/DictDefinition";
import "./results.css";

const Results = observer(() => {
  const store = useContext(StoreContext);
  return (
    <div className="results">
      {store.currentWord && <Queries />}
      {store.currentWord && <DictDefinition />}
    </div>
  );
});

export default Results;
