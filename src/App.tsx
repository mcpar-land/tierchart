import "./App.css";

import type { RouteRecord } from "vite-react-ssg";
import AllGames from "./pages/AllGames";
import TierChart from "./pages/TierChart";
import gameData from "./games";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <AllGames />,
    entry: "src/pages/AllGames.tsx",
  },
  ...gameData.map((game) => ({
    path: "/" + game.slug,
    element: <TierChart gameData={game} />,
  })),
];
