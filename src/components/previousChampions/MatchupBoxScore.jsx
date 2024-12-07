import PropTypes from "prop-types";

const MatchupBoxScore = ({ league }) => {
  return (
    <>
      <div className="matchup-box-score">
        <ul className="team-stats-winner">
          <h4 className="boxscore-team-name">{league.champion.username}</h4>
          {league.champion.stats.map((starter, index) => (
            <div className="starter" key={index}>
              <img
                src={`https://sleepercdn.com/content/nfl/players/${starter.playerId}.jpg`}
                alt={`image of ${starter.name}`}
                className="starter-img"
              />
              <div className="starter-info starter-position">
                {starter.position}
              </div>
              <div className="starter-info starter-name">{starter.name}</div>
              <div className="starter-info starter-points">
                {starter.points}
              </div>
            </div>
          ))}
          <h4 className="boxscore-total-points-winner">
            {league.champion.points}
          </h4>
        </ul>

        <ul className="team-stats">
          <h4 className="boxscore-team-name">{league.runnerUp.username}</h4>
          {league.runnerUp.stats.map((starter, index) => (
            <div className="starter" key={index}>
              <img
                src={`https://sleepercdn.com/content/nfl/players/${starter.playerId}.jpg`}
                alt={`image of ${starter.name}`}
                className="starter-img"
              />
              <div className="starter-info starter-position">
                {starter.position}
              </div>
              <div className="starter-info starter-name">{starter.name}</div>
              <div className="starter-info starter-points">
                {starter.points}
              </div>
            </div>
          ))}
          <h4 className="boxscore-total-points">{league.runnerUp.points}</h4>
        </ul>
      </div>
    </>
  );
};

MatchupBoxScore.propTypes = {
  league: PropTypes.shape({
    champion: PropTypes.shape({
      username: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          playerId: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          position: PropTypes.string.isRequired,
          points: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
    runnerUp: PropTypes.shape({
      username: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          playerId: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          position: PropTypes.string.isRequired,
          points: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default MatchupBoxScore;
