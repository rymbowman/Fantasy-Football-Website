import { useEffect, useState } from "react";
import { leagueId } from "../../constants/sleeperApi";
import axios from "axios";
import "../transactions/LeagueTrans.css";
import PageHeader from "../pageHeaders/PageHeader";

const LeagueTrans = () => {
  const [transactions, setTransactions] = useState([]);
  const [teams, setTeams] = useState({});
  const [players, setPlayers] = useState([]);
  const [displayedCount, setdisplayedCount] = useState(10);
  const [viewType, setViewType] = useState("all");

  const fetchTransactions = async () => {
    const promises = [];
    const totalWeeks = 18;
    for (let week = 1; week <= totalWeeks; week++) {
      promises.push(
        axios.get(
          `https://api.sleeper.app/v1/league/${leagueId}/transactions/${week}`
        )
      );
    }
    const allWeekTransactions = await Promise.all(promises);
    let allTransactions = [];
    allWeekTransactions.forEach((week) => {
      let weekTransactions = week.data;
      const successfulTransactions = Object.values(weekTransactions).filter(
        (tran) => tran.status === "complete"
      );
      allTransactions = [...allTransactions, ...successfulTransactions];
    });

    const sortedTransactions = allTransactions.sort((a, b) => {
      return b.status_updated - a.status_updated;
    });

    setTransactions(sortedTransactions);
  };

  const fetchTeams = async () => {
    try {
      const result = await axios.get(
        `https://api.sleeper.app/v1/league/${leagueId}/rosters`
      );
      const leagueUsers = await axios.get(
        `https://api.sleeper.app/v1/league/${leagueId}/users`
      );
      const rosters = result.data;
      const users = leagueUsers.data;

      const leagueTeams = {};
      Object.values(rosters).forEach((roster) => {
        const user = users.find((u) => u.user_id === roster.owner_id);
        if (user) {
          leagueTeams[roster.roster_id] = user.display_name;
        }
      });

      setTeams(leagueTeams);
    } catch (err) {
      console.log("error fetching rosters", err);
    }
  };

  const fetchPlayers = async () => {
    try {
      const response = await axios.get(
        "https://api.sleeper.app/v1/players/nfl"
      );
      const players = response.data;
      setPlayers(players);
    } catch (err) {
      console.log("error fetching players", err);
    }
  };

  useEffect(() => {
    fetchTeams();
    fetchTransactions();
    fetchPlayers();
  }, []);

  const loadMoreTransactions = () => {
    setdisplayedCount((prevCount) => prevCount + 10);
  };

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
    <div className="league-activity">
      <PageHeader category={"transactions"} pageTitle={"League Transactions"} />
      <div className="view-toggle">
        <button onClick={() => setViewType("all")}>All Transactions</button>
        <button onClick={() => setViewType("trade")}>Trades Only</button>
      </div>
      <div className="transactions-list">
        {transactions
          .filter((tran) => (viewType === "all" ? true : tran.type === "trade"))
          .slice(0, displayedCount)
          .map((tran, index) => (
            <div key={index} className="transaction-row">
              <div className="transaction-info">
                <h3 className="details-header">{tran.type}</h3>
                <p className="transaction-user">
                  {tran.roster_ids.map((id, index) => (
                    <>
                      {teams[id] ? `@ ${teams[id]}` : `Roster ID: ${id}`}
                      {index < tran.roster_ids.length - 1 && <br />}
                    </>
                  ))}
                </p>
                <p className="transaction-date">
                  {formatDate(tran.status_updated)}
                </p>
              </div>
              {tran.type === "trade" ? (
                <div className="trade-details">
                  {/* Map team acquisitions*/}
                  {tran.roster_ids.map((teamID, index) => (
                    <div key={index} className="team-assets">
                      <p className="team-name">{teams[teamID]} Acquires:</p>
                      <div className="traded-players-container">
                        {/*Players Acquired */}
                        {Object.entries(tran.adds || {})
                          .filter(([, rosterID]) => rosterID === teamID)
                          .map(([playerID]) => (
                            <div key={playerID} className="player">
                              <img
                                src={`https://sleepercdn.com/content/nfl/players/${playerID}.jpg`}
                                alt={players[playerID]?.full_name}
                                className="player-image"
                              />
                              <p>
                                {players[playerID]?.full_name ||
                                  "unknown player"}{" "}
                                -{" "}
                                {players[playerID]?.position ||
                                  "unknown position"}{" "}
                                {players[playerID]?.team || "FA"}
                              </p>
                            </div>
                          ))}
                        {(tran.draft_picks || [])
                          .filter((pick) => pick.owner_id === teamID)
                          .map((pick, index) => (
                            <p key={index} className="draft-pick">
                              Round {pick.round} - {pick.season}
                            </p>
                          ))}
                      </div>

                      <div className="draft-picks-container"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="waiver-details">
                  <div className="added-players-container">
                    {tran.adds && Object.keys(tran.adds).length > 0 ? (
                      Object.keys(tran.adds).map((id) => (
                        <div key={id} className="added-player">
                          <div className="player-content">
                            <p className="transaction-icon">
                              <i className="bx bx-plus-circle plus-icon"></i>
                            </p>

                            <img
                              src={`https://sleepercdn.com/content/nfl/players/${id}.jpg`}
                              alt={players[id]?.full_name || "unknown player"}
                              className="player-image"
                            />
                            <p className="player-name">
                              {players[id]?.full_name} - {players[id]?.position}{" "}
                              {players[id]?.team}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="added-player">
                        <div className="player-content">
                          {" "}
                          <p className="transaction-icon">
                            <i className="bx bx-plus-circle plus-icon"></i>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="dropped-players-container">
                    {tran.drops && Object.keys(tran.drops).length > 0 ? (
                      Object.keys(tran.drops).map((id) => (
                        <div key={id} className="dropped-player">
                          <div className="player-content">
                            <p className="transaction-icon">
                              <i className="bx bx-minus-circle minus-icon"></i>
                            </p>
                            <img
                              src={`https://sleepercdn.com/content/nfl/players/${id}.jpg`}
                              alt={players[id]?.full_name || "unknown player"}
                              className="player-image"
                            />
                            <p>
                              {players[id]?.full_name} - {players[id]?.position}{" "}
                              {players[id]?.team}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="dropped-player">
                        <div className="player-content">
                          <p className="transaction-icon">
                            <i className="bx bx-minus-circle minus-icon"></i>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
      {displayedCount < transactions.length && (
        <button onClick={loadMoreTransactions} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
};

export default LeagueTrans;
