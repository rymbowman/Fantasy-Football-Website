import PropTypes from "prop-types";
import { useEffect, useMemo } from "react";

const MatchupBoxScore = ({ league }) => {
  const championStats = useMemo(
    () => league.champion.stats || [],
    [league.champion.stats]
  );
  const runnerUpStats = useMemo(
    () => league.runnerUp.stats || [],
    [league.runnerUp.stats]
  );

  useEffect(() => {
    console.log("Champion Stats:", championStats);
    console.log("Runner-Up Stats:", runnerUpStats);
  }, [championStats, runnerUpStats]);

  return (
    <>
      <div className="matchup-box-score">
        <ul className="team-stats-winner">
          <h4 className="boxscore-team-name">{league.champion.username}</h4>
          {championStats.length > 0 ? (
            championStats.map((starter, index) => (
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
            ))
          ) : (
            <p>No stats available for champion</p>
          )}
          <h4 className="boxscore-total-points-winner">
            {league.champion.points}
          </h4>
        </ul>

        <ul className="team-stats">
          <h4 className="boxscore-team-name">{league.runnerUp.username}</h4>
          {runnerUpStats.length > 0 ? (
            runnerUpStats.map((starter, index) => (
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
            ))
          ) : (
            <p>No stats available for runner-up</p>
          )}
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
      ),
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
      ),
    }).isRequired,
  }).isRequired,
};

export default MatchupBoxScore;
