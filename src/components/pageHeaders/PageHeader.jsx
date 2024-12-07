import PropTypes from "prop-types";
import "../pageHeaders/PageHeader.css";

const PageHeader = ({ pageTitle }) => {
  return (
    <div className="header-div">
      <h1 className="header-title">{pageTitle}</h1>
    </div>
  );
};

PageHeader.propTypes = {
  category: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default PageHeader;
