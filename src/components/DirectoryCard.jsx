import "../styles/LeagueSplashPages.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DirectoryCard = (props) => {
  return (
    <>
      <Link to={props.link} className="card-pathways" id={props.id}>
        <div>
          <h3 className="card-heading">{props.title}</h3>
        </div>
      </Link>
    </>
  );
};

DirectoryCard.propTypes = {
  link: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
export default DirectoryCard;
