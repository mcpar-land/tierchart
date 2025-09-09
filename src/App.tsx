import "./App.css";

import { useState } from "react";
import TierChart from "./components/TierChart";

import tekkenGameData from "./assets/tekken.json";

function App() {
  const [labelN, setLabelN] = useState("Difficult");
  return (
    <>
      <input value={labelN} onChange={(e) => setLabelN(e.target.value)} />
      <TierChart
        labelN={labelN}
        labelS={"Easy"}
        labelE={"Well-rounded"}
        labelW={"Has flaws"}
        gameData={tekkenGameData}
      />
    </>
  );
}

export default App;
