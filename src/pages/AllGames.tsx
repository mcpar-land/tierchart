import { Head } from "vite-react-ssg";
import gameData from "../games";

import "./AllGames.css";

function AllGames() {
  const sortedGameData = gameData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>Tiercharts</h1>
      {sortedGameData.map((g, i) => (
        <div key={i}>
          <a href={`/${g.slug}`}>{g.name}</a>
        </div>
      ))}
      <div className="contributing">
        Don't see your game here?{" "}
        <a href="https://github.com/mcpar-land/tiercharts?tab=readme-ov-file#adding-a-game">
          Contribute!
        </a>
      </div>
    </>
  );
}

export default AllGames;
