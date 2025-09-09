import "./App.css";

import TierChart from "./components/TierChart";

function App() {
  return (
    <>
      <TierChart
        labelN={"Difficult"}
        labelS={"Easy"}
        labelE={"Well-rounded"}
        labelW={"Has flaws"}
        characters={[
          { name: "Kazuya", imgSrc: "" },
          { name: "Jin", imgSrc: "" },
          { name: "Jun", imgSrc: "" },
          { name: "Paul", imgSrc: "" },
          { name: "Law", imgSrc: "" },
          { name: "King", imgSrc: "" },
          { name: "Lars", imgSrc: "" },
          { name: "Xiaoyu", imgSrc: "" },
          { name: "Jack-8", imgSrc: "" },
          { name: "Nina", imgSrc: "" },
          { name: "Asuka", imgSrc: "" },
          { name: "Leroy", imgSrc: "" },
          { name: "Hwoarang", imgSrc: "" },
          { name: "Lili", imgSrc: "" },
          { name: "Bryan", imgSrc: "" },
          { name: "Claudio", imgSrc: "" },
          { name: "Azucena", imgSrc: "" },
          { name: "Raven", imgSrc: "" },
          { name: "Leo", imgSrc: "" },
          { name: "Steve", imgSrc: "" },
          { name: "Kuma", imgSrc: "" },
          { name: "Yoshimitsu", imgSrc: "" },
          { name: "Shaheen", imgSrc: "" },
          { name: "Dragunov", imgSrc: "" },
          { name: "Feng", imgSrc: "" },
          { name: "Panda", imgSrc: "" },
          { name: "Devil Jin", imgSrc: "" },
          { name: "Zafina", imgSrc: "" },
          { name: "Alisa", imgSrc: "" },
          { name: "Lee", imgSrc: "" },
          { name: "Victor", imgSrc: "" },
          { name: "Reina", imgSrc: "" },
          { name: "Eddy", imgSrc: "" },
          { name: "Lidia", imgSrc: "" },
        ]}
      />
    </>
  );
}

export default App;
