import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./components/loading/Spinner";
const LeagueInfo = lazy(() => import("./pages/LeagueInfo"));
const Members = lazy(() => import("./pages/Members"));
const Resources = lazy(() => import("./pages/Resources"));
const History = lazy(() => import("./pages/History"));
const Standings = lazy(() => import("./components/standings/Standings"));
const Podcasts = lazy(() => import("./components/podcasts/Podcasts"));
const Schedules = lazy(() => import("./components/schedules/Schedules"));
const DraftList = lazy(() => import("./components/drafts/DraftList"));
const PreviousChampions = lazy(() =>
  import("./components/previousChampions/PreviousChampions")
);
const LeagueTransactions = lazy(() =>
  import("./components/transactions/LeagueTransactions")
);
const Punishment = lazy(() => import("./components/punishments/Punishment"));

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
      <Route path="/transactions" element={<LeagueTransactions />} />
      <Route path="/league-punishments" element={<Punishment />} />
      <Route path="/past-champions" element={<PreviousChampions />} />
      <Route path="/draft-classes" element={<DraftList />} />
      <Route path="/podcasts" element={<Podcasts />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
