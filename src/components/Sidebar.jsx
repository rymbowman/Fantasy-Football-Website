import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
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
          src="./images/Liberty_Flames_logo.svg copy.png"
          alt="A logo of Liberty University"
          className="league-img"
        />
      </div>
      <ul>
        <li>
          <Link to="/">
            <i className="bx bxs-home-alt-2"></i>
            <span className="nav-item">Home Page</span>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <Link to="./league" id="league-info-sidebar">
            <i className="bx bxs-grid"></i>
            <span className="nav-item">League Info</span>
            <span>
              <i
                className="bx bx-chevron-down dropdown-arrow"
                id="league-dropdown-arrow"
              ></i>
            </span>
          </Link>

          <ul className="dropdown" id="league-dropdown">
            <li className="sidebar-dropdown-item">
              <a href="#">Standings/Rankings</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">Schedules</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">Transactions</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">League Leaders</a>
            </li>
          </ul>
          <span className="tooltip">League</span>
        </li>
        <li>
          <Link to="./members">
            <i className="bx bxs-user"></i>
            <span className="nav-item">Members</span>
          </Link>
          <span className="tooltip">Members</span>
        </li>
        <li>
          <Link to="./history">
            <i className="bx bxs-book"></i>
            <span className="nav-item">History</span>
            <span>
              <i
                className="bx bx-chevron-down dropdown-arrow"
                id="history-dropdown-arrow"
              ></i>
            </span>
          </Link>
          <ul className="dropdown" id="history-dropdown">
            <li className="sidebar-dropdown-item">
              <a href="#">Past Champions</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">League Punishments</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">Records</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">Draft Classes</a>
            </li>
          </ul>
          <span className="tooltip">History</span>
        </li>
        <li>
          <Link to="./resources">
            <i className="bx bxs-ball"></i>
            <span className="nav-item">Resources</span>
            <span>
              <i
                className="bx bx-chevron-down dropdown-arrow"
                id="resources-dropdown-arrow"
              ></i>
            </span>
          </Link>
          <ul className="dropdown" id="resources-dropdown">
            <li className="sidebar-dropdown-item">
              <a href="#">Trade Calculator</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">Dynasty Rankings</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">NFL News/Updates</a>
            </li>
            <li className="sidebar-dropdown-item">
              <a href="#">Dynasty Podcasts</a>
            </li>
          </ul>
          <span className="tooltip">Resources</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
