import { Link } from "react-router-dom";
import "../App.css";

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

export default SidebarIcon;
