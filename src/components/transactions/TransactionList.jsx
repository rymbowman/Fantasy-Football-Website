import PropTypes from "prop-types";
import TransactionsRow from "./TransactionsRow";

const TransactionList = ({
  transactions,
  viewType,
  displayedCount,
  teams,
  players,
}) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  return (
    <div className="transactions-list">
      {transactions
        .filter((tran) => (viewType === "all" ? true : tran.type === "trade"))
        .slice(0, displayedCount)
        .map((tran, index) => (
          <TransactionsRow
            key={index}
            transaction={tran}
            teams={teams}
            players={players}
            formatDate={formatDate}
          />
        ))}
    </div>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      roster_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
      status_updated: PropTypes.number.isRequired,
      adds: PropTypes.objectOf(PropTypes.number),
    })
  ).isRequired,
  viewType: PropTypes.string.isRequired,
  displayedCount: PropTypes.number.isRequired,
  teams: PropTypes.objectOf(PropTypes.string).isRequired,
  players: PropTypes.objectOf(
    PropTypes.shape({
      full_name: PropTypes.string,
    })
  ).isRequired,
  formatDate: PropTypes.func,
};

export default TransactionList;
