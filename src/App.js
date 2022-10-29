import { Results } from "./components/Results";
import { Header } from "./components/Header";
import { observer } from "mobx-react";

export const App = observer(() => (
  <div style={{ backgroundColor: "#f8f8ff", height: "100vh" }}>
    <Header />
    <Results />
  </div>
));
