import { useState, useEffect } from "react";
import axios from "axios";
import { leagueId } from "../constants/sleeperApi";

const TradeTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [teams, setTeams] = useState({});
  const [players, setPlayers] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);

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
    const fetchData = async () => {
      await fetchTeams();
      await fetchTransactions();
      await fetchPlayers();
    };
    fetchData();
  }, []);

  const loadMoreTrades = () => {
    setDisplayCount((prevCount) => prevCount + 5);
  };
  return (
    <>
      <h2>League Trades</h2>
      <div className="trades-container">
        {transactions
          .filter((tran) => tran.type === "trade")
          .slice(0, displayCount)
          .map((tran, index) => {
            const addedPlayers = tran.adds ? Object.keys(tran.adds) : [];
            const draftPicks = tran.draft_picks
              ? Object.values(tran.draft_picks)
              : [];
            const transactionDate = new Date(tran.status_updated);
            const formattedDate = transactionDate.toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            });

            // Create storage for each team's acquired and sent assets
            const team1Assets = {
              addedPlayers: [],
              draftPicks: [],
            };
            const team2Assets = {
              addedPlayers: [],
              draftPicks: [],
            };

            // Separate players and picks for each team
            addedPlayers.forEach((playerID) => {
              const playerRosterId = tran.adds[playerID];
              if (playerRosterId === tran.roster_ids[0]) {
                // Team 1 (roster_id[0]) receives this player
                team1Assets.addedPlayers.push(playerID);
              } else if (playerRosterId === tran.roster_ids[1]) {
                // Team 2 (roster_id[1]) receives this player
                team2Assets.addedPlayers.push(playerID);
              }
            });

            // Separate draft picks for each team
            draftPicks.forEach((pick) => {
              if (pick.owner_id === tran.roster_ids[0]) {
                // Team 1 (roster_id[0]) receives this pick
                team1Assets.draftPicks.push(pick);
              } else if (pick.owner_id === tran.roster_ids[1]) {
                // Team 2 (roster_id[1]) receives this pick
                team2Assets.draftPicks.push(pick);
              }
            });

            return (
              <div key={index} className="transactions-row">
                <div className="tran-item">{tran.type}</div>
                <div>{formattedDate}</div>
                <div>
                  {/* Display team names */}
                  {teams[tran.roster_ids[0]]} | {teams[tran.roster_ids[1]]}
                </div>

                {/* Display Team 1 (roster_id[0]) acquires */}
                <div className="team-sends">
                  <p>{teams[tran.roster_ids[0]]} Acquires:</p>
                  {team1Assets.addedPlayers.length > 0 &&
                    team1Assets.addedPlayers.map((id) => (
                      <span key={id}>
                        <img
                          src={`https://sleepercdn.com/content/nfl/players/${id}.jpg`}
                          className="player-image"
                        />
                        <p>
                          {players[id]
                            ? players[id].full_name
                            : "Unknown Player"}
                        </p>
                      </span>
                    ))}
                  {team1Assets.draftPicks.length > 0 &&
                    team1Assets.draftPicks.map((pick, index) => (
                      <p key={index}>
                        {`Round ${pick.round} - ${pick.season}`}
                      </p>
                    ))}
                </div>

                {/* Display Team 2 (roster_id[1]) acquires */}
                <div className="team-sends">
                  <p>{teams[tran.roster_ids[1]]} Acquires:</p>
                  {team2Assets.addedPlayers.length > 0 &&
                    team2Assets.addedPlayers.map((id) => (
                      <span key={id}>
                        <img
                          src={`https://sleepercdn.com/content/nfl/players/${id}.jpg`}
                          className="player-image"
                        />
                        <p>
                          {players[id]
                            ? players[id].full_name
                            : "Unknown Player"}
                        </p>
                      </span>
                    ))}
                  {team2Assets.draftPicks.length > 0 &&
                    team2Assets.draftPicks.map((pick, index) => (
                      <p key={index}>
                        {`Round ${pick.round} - ${pick.season}`}
                      </p>
                    ))}
                </div>
              </div>
            );
          })}
      </div>
      {displayCount < transactions.length && (
        <button onClick={loadMoreTrades} className="transactions-button">
          Load More
        </button>
      )}
    </>
  );
};

export default TradeTransactions;

// {/* Loop through the roster_ids to separate the assets by owner */}
// {tran.roster_ids.map((rosterID) => (
//     <div key={rosterID} className={`owner-assets owner-${rosterID}`}>
//       <h3>{teams[rosterID]}'s Acquired Assets:</h3>
//       <div className="tran-added">
//         {tran.adds && Object.entries(tran.adds)
//           .filter(([playerId, newRosterId]) => newRosterId === rosterID)
//           .map(([playerId]) => (
//             <span key={playerId}>
//               <img
//                 src={`https://sleepercdn.com/content/nfl/players/${playerId}.jpg`}
//                 className="player-image"
//               />
//               <p>{players[playerId] ? players[playerId].full_name : null}</p>
//             </span>
//         ))}
//       </div>
//       <div className="tran-dropped">
//         {tran.drops && Object.entries(tran.drops)
//           .filter(([playerId, oldRosterId]) => oldRosterId === rosterID)
//           .map(([playerId]) => (
//             <span key={playerId}>
//               <img
//                 src={`https://sleepercdn.com/content/nfl/players/${playerId}.jpg`}
//                 className="player-image"
//               />
//               <p>{players[playerId] ? players[playerId].full_name : null}</p>
//             </span>
//         ))}
//       </div>
//     </div>
//   ))}
