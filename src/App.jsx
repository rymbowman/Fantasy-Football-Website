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
import Standings from "./components/Standings";
import "./constants/data/teamsData";
import PastPunishments from "./pages/PastPunishments";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/league" element={<LeagueInfo />} />
      <Route path="/members" element={<Members />} />
      <Route path="/history" element={<History />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/standings" element={<Standings />} />
      <Route path="/schedules" />
      <Route path="/transactions" />
      <Route path="/league-leaders" />
      <Route path="/trade-block" />
      <Route path="/past-punishments" element={<PastPunishments />} />
      <Route path="/past-champions" />
      <Route path="/draft-results" />
      <Route path="/records" />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
