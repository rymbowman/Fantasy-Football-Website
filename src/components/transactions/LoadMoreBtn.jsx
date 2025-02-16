import PropTypes from "prop-types";

const LoadMoreBtn = ({
  displayedCount,
  transactions,
  loadMoreTransactions,
}) => {
  return (
    <>
      {displayedCount < transactions && (
        <button onClick={loadMoreTransactions} className="load-more">
          Load More
        </button>
      )}
    </>
  );
};

LoadMoreBtn.propTypes = {
  displayedCount: PropTypes.number.isRequired,
  transactions: PropTypes.number.isRequired,
  loadMoreTransactions: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
