import Top from "./components/top/Top";
import { createContext } from "react";
import storeInstance from "./store/store";

import Results from "./components/results/Results";

export const StoreContext = createContext();

function App() {
  return (
    <StoreContext.Provider value={storeInstance}>
      <div className="App">
        <Top />
        <Results />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
