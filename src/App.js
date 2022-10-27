import Home from "./pages/home/Home";
import {createContext} from "react"
//import storeInstance from "./store/Store";

const StoreContext = createContext();

function App() {
  return (
    <StoreContext.Provider /* value={storeInstance} */>
    <div className="App">
      <Home />
    </div>
    </StoreContext.Provider>
  );
}

export default App;
