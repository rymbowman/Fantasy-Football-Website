const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <h3>Flames Fantasy</h3>
        </div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <div className="league-img">
        <img
          src="./Images/Liberty_Flames_logo.svg copy.png"
          alt="A logo of Liberty University"
          className="league-img"
        />
      </div>
      <ul>
        <li>
          <a href="./index.html">
            <i className="bx bxs-home-alt-2"></i>
            <span className="nav-item">Home Page</span>
          </a>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <a href="./league.html" id="league-info-sidebar">
            <i className="bx bxs-grid"></i>
            <span className="nav-item">League Info</span>
            <span>
              <i
                className="bx bx-chevron-down dropdown-arrow"
                id="league-dropdown-arrow"
              ></i>
            </span>
          </a>

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
          <a href="./members.html">
            <i className="bx bxs-user"></i>
            <span className="nav-item">Members</span>
          </a>
          <span className="tooltip">Members</span>
        </li>
        <li>
          <a href="./history.html">
            <i className="bx bxs-book"></i>
            <span className="nav-item">History</span>
            <span>
              <i
                className="bx bx-chevron-down dropdown-arrow"
                id="history-dropdown-arrow"
              ></i>
            </span>
          </a>
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
          <a href="./resources.html">
            <i className="bx bxs-ball"></i>
            <span className="nav-item">Resources</span>
            <span>
              <i
                className="bx bx-chevron-down dropdown-arrow"
                id="resources-dropdown-arrow"
              ></i>
            </span>
          </a>
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
