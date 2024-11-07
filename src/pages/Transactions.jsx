import "../styles/App.css";

import LeagueTrans from "../components/transactions/LeagueTrans";

const Transactions = () => {
  return (
    <div className="transactions-page">
      {/* <LeagueTransactions />
      <TradeTransactions /> */}
      <LeagueTrans />
    </div>
  );
};

export default Transactions;
