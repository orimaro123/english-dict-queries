import { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../App";
import Queries from "../queries/Queries";

const Results = observer(() => {
  const store = useContext(StoreContext);
  return <div> {store.currentWord && <Queries />}</div>;
});

export default Results;
