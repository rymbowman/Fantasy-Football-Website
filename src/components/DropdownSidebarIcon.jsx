import "../App.css";
import { Link } from "react-router-dom";
const DropdownSidebarIcon = ({
  link,
  iconImage,
  page,
  dropdownItems,
  tooltip,
}) => {
  return (
    <>
      <li>
        <Link to={link} id="league-info-sidebar">
          <i className={iconImage}></i>
          <span className="nav-item">{page}</span>
          <span>
            <i
              className="bx bx-chevron-down dropdown-arrow"
              id="league-dropdown-arrow"
            ></i>
          </span>
        </Link>

        <ul className="dropdown" id="league-dropdown">
          {dropdownItems.map((item, index) => (
            <li className="sidebar-dropdown-item" key={index}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <span className="tooltip">{tooltip}</span>
      </li>
    </>
  );
};

export default DropdownSidebarIcon;
