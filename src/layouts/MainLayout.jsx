import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "../App.css";
const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default MainLayout;
