import "../App.css";
import { Link } from "react-router-dom";
const DirectoryCard = (props) => {
  return (
    <>
      <Link to={props.link} className="cardPathways" id={props.id}>
        <div>
          <h3 className="card-heading">{props.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default DirectoryCard;
