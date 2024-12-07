import TransactionsInfo from "./TransactionsInfo";
import TradeTransaction from "./TradeTransaction";
import WaiverTransaction from "./WaiverTransaction";
import PropTypes from "prop-types";

const TransactionsRow = ({ transaction, teams, players, formatDate }) => {
  return (
    <div className="transaction-row">
      <TransactionsInfo
        transaction={transaction}
        teams={teams}
        formatDate={formatDate}
      />
      {transaction.type === "trade" && (
        <TradeTransaction
          transaction={transaction}
          teams={teams}
          players={players}
        />
      )}
      {(transaction.type === "waiver" || transaction.type === "free_agent") && (
        <WaiverTransaction transaction={transaction} players={players} />
      )}
    </div>
  );
};

TransactionsRow.propTypes = {
  transaction: PropTypes.object.isRequired,
  teams: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
};
export default TransactionsRow;
