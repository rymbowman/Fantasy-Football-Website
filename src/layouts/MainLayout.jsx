import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default MainLayout;
