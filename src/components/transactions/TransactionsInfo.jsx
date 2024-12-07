import React from "react";
import PropTypes from "prop-types";

const TransactionsInfo = ({ transaction, teams, formatDate }) => {
  return (
    <div className="transaction-info">
      <h3 className="details-header">{transaction.type}</h3>
      <p className="transaction-user">
        {transaction.roster_ids.map((id, index) => (
          <React.Fragment key={index}>
            {teams[id] ? `@ ${teams[id]}` : `Roster ID: ${id}`}
            {index < transaction.roster_ids.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
      <p className="transaction-date">
        {formatDate(transaction.status_updated)}
      </p>
    </div>
  );
};

TransactionsInfo.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    roster_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    status_updated: PropTypes.number.isRequired,
  }).isRequired,
  teams: PropTypes.objectOf(PropTypes.string).isRequired,
  formatDate: PropTypes.func.isRequired,
};

export default TransactionsInfo;
