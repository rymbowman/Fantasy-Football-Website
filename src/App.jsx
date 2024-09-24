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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/league" element={<LeagueInfo />} />
      <Route path="/members" element={<Members />} />
      <Route path="/history" element={<History />} />
      <Route path="/resources" element={<Resources />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
