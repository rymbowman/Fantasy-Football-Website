import PropTypes from "prop-types";

const MatchupItem = ({ matchup, currentWeek }) => {
  const isMatchupComplete = matchup.week < currentWeek;
  const isWin = isMatchupComplete && matchup.points > matchup.opponentPoints;
  const isLoss = isMatchupComplete && matchup.points < matchup.opponentPoints;
  const isTie = isMatchupComplete && matchup.points === matchup.opponentPoints;

  const resultText = isWin ? "Win!" : isLoss ? "Loss" : isTie ? "Tie" : null;
  return (
    <li className={isWin ? "win" : isLoss ? "loss" : isTie ? "tie" : "neutral"}>
      <span className="schedule-week"> Week: {matchup.week}</span>
      <span className="schedule-opponent">vs {matchup.opponent}</span>
      <span className="schedule-score">
        {matchup.points !== null && matchup.opponentPoints !== null
          ? `${matchup.points} - ${matchup.opponentPoints}`
          : null}
      </span>
      <span className="schedule-result">
        {isMatchupComplete ? resultText : null}
      </span>
    </li>
  );
};

MatchupItem.propTypes = {
  currentWeek: PropTypes.number,
  matchup: PropTypes.shape({
    points: PropTypes.number,
    opponentPoints: PropTypes.number,
    week: PropTypes.number,
    opponent: PropTypes.string,
  }),
};
export default MatchupItem;
