import "../styles/App.css";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
const DropdownSidebarIcon = ({
  link,
  iconImage,
  page,
  dropdownItems,
  tooltip,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [rotate, setRotate] = useState(false);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
    setRotate(!rotate);
  };

  return (
    <>
      <li>
        <div className="li-dropdown">
          <Link to={link}>
            <i className={iconImage}></i>
            <span className="nav-item">{page}</span>
          </Link>
          <span>
            <i
              className={`bx bx-chevron-down dropdown-arrow ${
                rotate ? "rotate" : ""
              }`}
              id="league-dropdown-arrow"
              onClick={toggleDropdown}
            ></i>
          </span>
        </div>

        <ul
          className={`dropdown ${isActive ? "active" : ""}`}
          id="league-dropdown"
        >
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

DropdownSidebarIcon.propTypes = {
  link: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  dropdownItems: PropTypes.array,
  tooltip: PropTypes.string.isRequired,
};
export default DropdownSidebarIcon;
