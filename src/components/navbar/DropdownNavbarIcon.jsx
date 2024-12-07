import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DropdownNavbarIcon = ({
  link,
  iconImage,
  dropdownItems,
  tooltip,
  page,
  isActive,
  toggleDropdown,
  closeDropdown,
}) => {
  return (
    <>
      <div className="nav-item">
        <div className="dropdown-icons-div">
          <Link to={link} className="nav-link" onClick={closeDropdown}>
            <i className={`${iconImage} nav-icon`}></i>
            <p className="nav-tooltip" onClick={(e) => e.preventDefault()}>
              {tooltip}
            </p>
          </Link>
          <i
            className={"bx bx-chevron-down dropdown-arrow"}
            onClick={toggleDropdown}
          ></i>
        </div>

        <ul className={`dropdown${isActive ? "-active" : ""}`}>
          <h6 className="navbar-dropdown-title">{page}</h6>
          {dropdownItems.map((item, index) => (
            <li className="navbar-dropdown-item" key={index}>
              {item.external ? (
                <a
                  href={item.link}
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                    window.open(item.link, "_blank", "noopener noreferrer");
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="dropdown-link"
                  onClick={toggleDropdown}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

DropdownNavbarIcon.propTypes = {
  link: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  dropdownItems: PropTypes.array.isRequired,
  tooltip: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};
export default DropdownNavbarIcon;
