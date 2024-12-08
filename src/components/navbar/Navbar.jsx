import { useState } from "react";
import "../navbar/Navbar.css";
import "../../styles/App.css";
import DropdownNavbarIcon from "./DropdownNavbarIcon";
import NavbarItem from "./NavbarItem";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index)); // Toggle dropdown state
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
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
          closeDropdown={closeDropdown}
        />
        <NavbarItem
          link={"/members"}
          iconImage={"bx bxs-user"}
          tooltip={"Members"}
          closeDropdown={closeDropdown}
        />
        <DropdownNavbarIcon
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
          closeDropdown={closeDropdown}
        />
        <DropdownNavbarIcon
          link={"/history"}
          iconImage={"bx bxs-book"}
          page="History"
          dropdownItems={[
            { link: "/past-champions", label: "Champions" },
            { link: "/league-punishments", label: "Punishments" },
            { link: "/draft-classes", label: "Drafts" },
          ]}
          tooltip={"History"}
          isActive={activeDropdown === 1} // Pass active state
          toggleDropdown={() => toggleDropdown(1)} // Pass toggle function
          closeDropdown={closeDropdown}
        />
        <DropdownNavbarIcon
          link={"/resources"}
          iconImage={"bx bxs-ball"}
          page="Resources"
          dropdownItems={[
            {
              link: "https://www.footballguys.com/rankings/duration/dynasty?pos=all#more",
              label: "Dynasty Rankings",
              external: true,
            },
            { link: "/podcasts", label: "Podcasts", external: false },
            {
              link: "https://dynastyleaguefootball.com/trade-analyzer/",
              label: "Trade Calculator",
              external: true,
            },
          ]}
          tooltip={"Resources"}
          isActive={activeDropdown === 2} // Pass active state
          toggleDropdown={() => toggleDropdown(2)} // Pass toggle function
          closeDropdown={closeDropdown}
        />
      </div>
    </div>
  );
};

export default Navbar;
