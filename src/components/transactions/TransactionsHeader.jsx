import PropTypes from "prop-types";
import PageHeader from "../pageHeaders/PageHeader";

const TransactionsHeader = ({ setViewType }) => {
  return (
    <>
      <PageHeader pageTitle={"League Transactions"} />
      <div className="view-toggle">
        <button onClick={() => setViewType("all")}>All Transactions</button>
        <button onClick={() => setViewType("trade")}>Trades Only</button>
      </div>
    </>
  );
};

TransactionsHeader.propTypes = {
  setViewType: PropTypes.func.isRequired,
};

export default TransactionsHeader;
