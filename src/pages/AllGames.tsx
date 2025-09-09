import gameData from "../games";

import "./AllGames.css";

function AllGames() {
  return (
    <>
      <h1>Tiercharts</h1>
      {gameData.map((g, i) => (
        <div key={i}>
          <a href={`/${g.slug}`}>{g.name}</a>
        </div>
      ))}
    </>
  );
}

export default AllGames;
