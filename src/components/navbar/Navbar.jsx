import { useState } from "react";
import "../navbar/Navbar.css";
import "../../styles/App.css";
import DropdownSidebarIcon from "./DropdownNavbarIcon";
import NavbarItem from "./NavbarItem";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index)); // Toggle dropdown state
  };

  return (
    <div className="navbar">
      <img
        src="src/assets/images/Liberty_Flames_logo.svg copy.png"
        alt=""
        className="liberty-logo"
      />
      <div className="navbar-items">
        <NavbarItem
          link={"/"}
          iconImage={"bx bxs-home-alt-2"}
          tooltip={"Home"}
        />
        <NavbarItem
          link={"/members"}
          iconImage={"bx bxs-user"}
          tooltip={"Members"}
        />
        <DropdownSidebarIcon
          link={"/league"}
          iconImage={"bx bxs-grid"}
          page="League"
          dropdownItems={[
            { link: "/standings", label: "Standings" },
            { link: "/transactions", label: "Transactions" },
            { link: "/schedules", label: "Schedules" },
          ]}
          tooltip={"League"}
          isActive={activeDropdown === 0} // Pass active state
          toggleDropdown={() => toggleDropdown(0)} // Pass toggle function
        />
        <DropdownSidebarIcon
          link={"/history"}
          iconImage={"bx bxs-book"}
          page="History"
          dropdownItems={[
            { link: "/past-champions", label: "Past Champions" },
            { link: "/league-punishments", label: "League Punishments" },
            { link: "/draft-classes", label: "Draft Classes" },
          ]}
          tooltip={"History"}
          isActive={activeDropdown === 1} // Pass active state
          toggleDropdown={() => toggleDropdown(1)} // Pass toggle function
        />
        <DropdownSidebarIcon
          link={"/resources"}
          iconImage={"bx bxs-ball"}
          page="Resources"
          dropdownItems={[
            { link: "/dynasty-rankings", label: "Dynasty Rankings" },
            { link: "/podcasts", label: "Dynasty Podcasts" },
            { link: "/trade-calc", label: "Trade Calculator" },
          ]}
          tooltip={"Resources"}
          isActive={activeDropdown === 2} // Pass active state
          toggleDropdown={() => toggleDropdown(2)} // Pass toggle function
        />
      </div>
    </div>
  );
};

export default Navbar;
