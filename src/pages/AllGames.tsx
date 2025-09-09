import gameData from "../games";

function AllGames() {
  return (
    <>
      {gameData.map((g, i) => (
        <div key={i}>
          <a href={`/${g.slug}`}>{g.name}</a>
        </div>
      ))}
      {/*<input value={labelN} onChange={(e) => setLabelN(e.target.value)} />
      <TierChart
        labelN={labelN}
        labelS={"Easy"}
        labelE={"Well-rounded"}
        labelW={"Has flaws"}
        gameData={tekkenGameData}
      />*/}
    </>
  );
}

export default AllGames;
