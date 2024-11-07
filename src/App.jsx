import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LeagueInfo from "./pages/LeagueInfo";
import Members from "./pages/Members";
import Resources from "./pages/Resources";
import History from "./pages/History";
import Standings from "./components/standings/Standings";
import "./constants/data/teamsData";
import Podcasts from "./components/podcasts/Podcasts";
import Schedules from "./components/schedules/Schedules";
import Drafts from "./components/drafts/Drafts";
import PreviousChampions from "./components/previousChampions/PreviousChampions";
import LeagueTrans from "./components/transactions/LeagueTrans";
import Punishment from "./components/punishments/Punishment";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/league" element={<LeagueInfo />} />
      <Route path="/members" element={<Members />} />
      <Route path="/history" element={<History />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/standings" element={<Standings />} />
      <Route path="/schedules" element={<Schedules />} />
      <Route path="/transactions" element={<LeagueTrans />} />
      <Route path="/league-leaders" />
      <Route path="/trade-block" />
      <Route path="/past-punishments" element={<Punishment />} />
      <Route path="/past-champions" element={<PreviousChampions />} />
      <Route path="/draft-results" element={<Drafts />} />
      <Route path="/records" />
      <Route path="/podcasts" element={<Podcasts />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
