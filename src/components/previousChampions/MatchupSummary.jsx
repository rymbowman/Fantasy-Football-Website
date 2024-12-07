import PropTypes from "prop-types";

const MatchupSummary = ({ league, index, toggleBoxscore, activeBoxScores }) => {
  return (
    <>
      <div className="matchup-summary">
        <h2>
          {league.year}: {league.champion.username}
        </h2>
        <p>defeats {league.runnerUp.username}</p>
        <p>
          {league.champion.points} - {league.runnerUp.points}
        </p>
        <button className="boxscore-btn" onClick={() => toggleBoxscore(index)}>
          {activeBoxScores[index] ? "Hide" : "Box Score"}
        </button>
      </div>
    </>
  );
};

MatchupSummary.propTypes = {
  league: PropTypes.shape({
    year: PropTypes.string.isRequired,
    champion: PropTypes.shape({
      username: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    }).isRequired,
    runnerUp: PropTypes.shape({
      username: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleBoxscore: PropTypes.func.isRequired,
  activeBoxScores: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default MatchupSummary;
