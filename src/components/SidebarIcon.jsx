import { Link } from "react-router-dom";
import "../App.css";
import PropTypes from "prop-types";
const SidebarIcon = ({ link, iconImage, page, tooltip }) => {
  return (
    <>
      <li>
        <Link to={link}>
          <i className={iconImage}></i>
          <span className="nav-item">{page}</span>
        </Link>
        <span className="tooltip">{tooltip}</span>
      </li>
    </>
  );
};
SidebarIcon.propTypes = {
  link: PropTypes.string.isRequired,
  iconImage: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
};
export default SidebarIcon;
