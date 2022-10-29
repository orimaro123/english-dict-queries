import Results from "./components/results/Results";
import Top from "./components/top/Top";
import storeInstance from "./store/store";
import { observer } from "mobx-react";

const App = observer (()=> {
  
  return (
    <div style={{ backgroundColor: "	#f8f8ff", height: "100vh" }}>
      <Top />
      {storeInstance.currentWord.length > 0 ? (<Results />): <div>Enter a word or a letter you would like to check</div>}
    </div>
  );
})

export default App;
