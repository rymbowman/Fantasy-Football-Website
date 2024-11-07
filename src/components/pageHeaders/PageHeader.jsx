import PropTypes from "prop-types";
const PageHeader = ({ category, pageTitle }) => {
  return (
    <div className={`${category}-header-div`}>
      <h1 className={`${category}-h1`}>{pageTitle}</h1>
    </div>
  );
};

PageHeader.propTypes = {
  category: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default PageHeader;
