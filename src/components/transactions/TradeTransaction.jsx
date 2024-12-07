import PropTypes from "prop-types";

const TradeTransaction = ({ transaction, teams, players }) => {
  return (
    <div className="trade-details">
      {transaction.roster_ids.map((teamID, index) => (
        <div key={index} className="team-assets">
          <p className="team-name">{teams[teamID]} Acquires:</p>
          <div className="traded-players-container">
            {Object.entries(transaction.adds || {})
              .filter(([, rosterID]) => rosterID === teamID)
              .map(([playerID]) => (
                <div key={playerID} className="player">
                  <img
                    src={`https://sleepercdn.com/content/nfl/players/${playerID}.jpg`}
                    alt={players[playerID]?.full_name}
                    className="player-image"
                  />
                  <p>
                    {players[playerID]?.full_name || "unknown player"} -{" "}
                    {players[playerID]?.position || "unknown position"}{" "}
                    {players[playerID]?.team || "FA"}
                  </p>
                </div>
              ))}
            {(transaction.draft_picks || [])
              .filter((pick) => pick.owner_id === teamID)
              .map((pick, index) => (
                <p key={index} className="draft-pick">
                  Round {pick.round} - {pick.season}
                </p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

TradeTransaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    roster_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    status_updated: PropTypes.number.isRequired,
    adds: PropTypes.objectOf(PropTypes.number),
    draft_picks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  teams: PropTypes.objectOf(PropTypes.string).isRequired,
  players: PropTypes.objectOf(
    PropTypes.shape({
      full_name: PropTypes.string,
      position: PropTypes.string,
      team: PropTypes.string,
    })
  ).isRequired,
  formatDate: PropTypes.func,
};
export default TradeTransaction;
