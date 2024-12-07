import PropTypes from "prop-types";

const WaiverTransaction = ({ transaction, players }) => {
  return (
    <div className="waiver-details">
      <div className="added-players-container">
        {transaction.adds && Object.keys(transaction.adds).length > 0 ? (
          Object.keys(transaction.adds).map((id) => (
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
        {transaction.drops && Object.keys(transaction.drops).length > 0 ? (
          Object.keys(transaction.drops).map((id) => (
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
  );
};

WaiverTransaction.propTypes = {
  transaction: PropTypes.shape({
    adds: PropTypes.objectOf(PropTypes.number),
    drops: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
  players: PropTypes.objectOf(
    PropTypes.shape({
      full_name: PropTypes.string,
      position: PropTypes.string,
      team: PropTypes.string,
    })
  ).isRequired,
};
export default WaiverTransaction;
