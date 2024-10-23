import { useEffect, useState } from "react";
import { leagueId } from "../constants/sleeperApi";
import axios from "axios";

const LeagueTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [teams, setTeams] = useState({});
  const [players, setPlayers] = useState([]);
  const [displayedCount, setDisplayCount] = useState(10);

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
      allTransactions = [
        ...allTransactions,
        ...Object.values(weekTransactions),
      ];
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
    setDisplayCount((prevCount) => prevCount + 10);
  };
  return (
    <>
      <h2>League Transactions</h2>
      <div className="tran-table">
        <div className="transactions-row">
          <div className="tran-type tran-item">Type</div>
          <div className="tran-week tran-item">Week</div>
          <div className="tran-user tran-item">User</div>
          <div className="tran-added tran-item">Added</div>
          <div className="tran-dropped tran-item">Dropped</div>
        </div>
        {transactions.slice(0, displayedCount).map((tran, index) => {
          if (tran.type !== "trade") {
            const addedPlayerId = tran.adds ? Object.keys(tran.adds) : [];
            const droppedPlayerId = tran.drops ? Object.keys(tran.drops) : [];
            const transactionDate = new Date(tran.status_updated);
            const formattedDate = transactionDate.toLocaleString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            });
            return (
              <div key={index} className="transactions-row">
                <div className="tran-type tran-item">{tran.type}</div>{" "}
                <div className="tran-week tran-item">{formattedDate}</div>{" "}
                <div className="tran-user tran-item">
                  {tran.roster_ids
                    .map((id) => teams[id] || `Roster ID ${id}`)
                    .join(", ")}{" "}
                </div>{" "}
                {addedPlayerId.length > 0 || droppedPlayerId.length > 0 ? (
                  <>
                    {addedPlayerId.length > 0 ? (
                      <div className="tran-added tran-item">
                        {addedPlayerId.map((id) => (
                          <span key={id} className="added-div">
                            <img
                              src={`https://sleepercdn.com/content/nfl/players/${id}.jpg`}
                              className="player-image"
                            />
                            <p className="player-text">
                              {players[id] ? (
                                <>
                                  {players[id].full_name} -{" "}
                                  {players[id].position} {players[id].team}
                                </>
                              ) : (
                                ` Player id: ${id}`
                              )}{" "}
                            </p>
                            <p className="waiver-bid">
                              Bid: ${tran.settings.waiver_bid}
                            </p>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="tran-added tran-item"></div>
                    )}
                    {droppedPlayerId.length > 0 ? (
                      <div className="tran-dropped tran-item">
                        {droppedPlayerId.map((id) => (
                          <span key={id} className="dropped-div">
                            <img
                              src={`https://sleepercdn.com/content/nfl/players/${id}.jpg`}
                              className="player-image"
                            />
                            {players[id]
                              ? players[id].full_name
                              : `Player id: ${id}`}{" "}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="tran-dropped tran-item">
                        {" "}
                        no dropped players
                      </div>
                    )}
                  </>
                ) : (
                  <span>No player transactions</span>
                )}
              </div>
            );
          }
        })}
        {displayedCount < transactions.length && (
          <button onClick={loadMoreTransactions}>Load More</button>
        )}
      </div>
    </>
  );
};
export default LeagueTransactions;

//${`https://sleepercdn.com/avatars/${players[id]}.jpg`}
