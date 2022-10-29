import { Results } from "./components/Results";
import { Header } from "./components/Header";
import { observer } from "mobx-react";

export const App = observer(() => (
  <div>
    <Header />
    <Results />
  </div>
));
