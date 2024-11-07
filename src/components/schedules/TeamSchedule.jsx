import PropTypes from "prop-types";
import MatchupItem from "./MatchupItem";
import "../schedules/Schedules.css";

const TeamSchedule = ({ matchups, currentWeek }) => {
  return (
    <div className="team-schedule">
      <ul className="team-schedules">
        {matchups.map((matchup, index) => (
          <MatchupItem
            key={index}
            matchup={matchup}
            currentWeek={currentWeek}
          />
        ))}
      </ul>
    </div>
  );
};

TeamSchedule.propTypes = {
  teamName: PropTypes.string,
  matchups: PropTypes.array,
  currentWeek: PropTypes.number,
};
export default TeamSchedule;
