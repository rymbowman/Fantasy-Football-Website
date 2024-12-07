import { useState } from "react";
import "../transactions/LeagueTransactions.css";
import TransactionsHeader from "./TransactionsHeader";
import TransactionList from "./TransactionList";
import LoadMoreBtn from "./LoadMoreBtn";
import { useFetchTransactions } from "../../constants/customHooks/useFetchTransactions";
import { useFetchPlayers } from "../../constants/customHooks/useFetchPlayers";
import { useFetchTeams } from "../../constants/customHooks/useFetchTeams";
import Spinner from "../loading/Spinner";
import { leagueId } from "../../constants/fetchRequests/sleeperApi";

const LeagueTransactions = () => {
  const { teams, loading: teamsLoading, error: teamsError } = useFetchTeams();
  const {
    transactions,
    loading: transactionsLoading,
    error: transactionsError,
  } = useFetchTransactions(leagueId);
  const {
    players,
    loading: playersLoading,
    error: playersError,
  } = useFetchPlayers();

  const [displayedCount, setdisplayedCount] = useState(10);
  const [viewType, setViewType] = useState("all");

  if (playersLoading || transactionsLoading || teamsLoading) return <Spinner />;
  if (playersError || transactionsError || teamsError)
    return <div>Error loading data</div>;

  const loadMoreTransactions = () => {
    setdisplayedCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="league-activity">
      <TransactionsHeader setViewType={setViewType} />
      <TransactionList
        transactions={transactions}
        viewType={viewType}
        displayedCount={displayedCount}
        teams={teams}
        players={players}
      />
      <LoadMoreBtn
        displayedCount={displayedCount}
        transactions={transactions.length}
        loadMoreTransactions={loadMoreTransactions}
      />
    </div>
  );
};

export default LeagueTransactions;
