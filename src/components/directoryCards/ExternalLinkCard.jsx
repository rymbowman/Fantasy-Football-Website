import PropTypes from "prop-types";
import "../directoryCards/DirectoryCards.css";

const ExternalLinkCard = (props) => {
  return (
    <>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-pathways"
        id={props.id}
      >
        <div>
          <h3 className="card-heading">{props.title}</h3>
        </div>
      </a>
    </>
  );
};

ExternalLinkCard.propTypes = {
  link: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};
export default ExternalLinkCard;
