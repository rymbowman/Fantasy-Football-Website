import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import PropTypes from "prop-types";
const NavbarItem = ({ link, iconImage, tooltip }) => {
  return (
    <div className="nav-item">
      <Link to={link} className="nav-link">
        <i className={`${iconImage} nav-icon`}></i>
        <p className="nav-tooltip" onClick={(e) => e.preventDefault()}>
          {tooltip}
        </p>
      </Link>
    </div>
  );
};
NavbarItem.propTypes = {
  navItem: PropTypes.string,
  link: PropTypes.string,
  iconImage: PropTypes.string,
  tooltip: PropTypes.string,
};
export default NavbarItem;
