import gameData from "../games";

import "./AllGames.css";

function AllGames() {
  const sortedGameData = gameData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <h1>Tiercharts</h1>
      {sortedGameData.map((g, i) => (
        <div key={i}>
          <a href={`/${g.slug}`}>{g.name}</a>
        </div>
      ))}
    </>
  );
}

export default AllGames;
