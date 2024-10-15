import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "../styles/App.css";
const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default MainLayout;
