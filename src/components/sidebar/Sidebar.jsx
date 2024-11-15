import { useState } from "react";
import "../sidebar/Sidebar.css";
import "../../styles/App.css";
import SidebarIcon from "./SidebarIcon";
import DropdownSidebarIcon from "./DropdownSidebarIcon";
const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="top">
        <div className="logo">
          <h3>Flames Fantasy</h3>
        </div>
        <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
      </div>
      <div className="league-img">
        <img
          src="./src/assets/images/Liberty_Logo.jpeg"
          alt="A logo of Liberty University"
          className="league-img"
        />
      </div>
      <ul>
        <SidebarIcon
          link={"/"}
          iconImage={"bx bxs-home-alt-2"}
          page={"Home Page"}
          tooltip={"Home"}
        />
        <SidebarIcon
          link={"/members"}
          iconImage={"bx bxs-user"}
          page={"Members"}
          tooltip={"Members"}
        />
        <DropdownSidebarIcon
          link={"/league"}
          iconImage={"bx bxs-grid"}
          page={"League Info"}
          dropdownItems={[
            { link: "/standings", label: "Standings" },
            { link: "/transactions", label: "Transactions" },
            { link: "/schedules", label: "Schedules" },
            { link: "/league-leaders", label: "League Leaders" },
            { link: "/trade-block", label: "Trade Block" },
          ]}
          tooltip={"League"}
        />
        <DropdownSidebarIcon
          link={"/history"}
          iconImage={"bx bxs-book"}
          page={"History"}
          dropdownItems={[
            { link: "/past-champions", label: "Past Champions" },
            { link: "/league-punishments", label: "League Punishments" },
            { link: "/records", label: "Records" },
            { link: "/draft-classes", label: "Draft Classes" },
            { link: "/league-leaders", label: "League Leaders" },
          ]}
          tooltip={"History"}
        />
        <DropdownSidebarIcon
          link={"/resources"}
          iconImage={"bx bxs-ball"}
          page={"Resources"}
          dropdownItems={[
            { link: "/trade-calc", label: "Trade Calculator" },
            { link: "/dynasty-rankings", label: "Dynasty Rankings" },
            { link: "/nfl-news", label: "NFL News" },
            { link: "/dynasty-podcasts", label: "Dynasty Podcasts" },
          ]}
          tooltip={"Resources"}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
