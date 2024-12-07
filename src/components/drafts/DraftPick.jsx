import PropTypes from "prop-types";
import "../drafts/Drafts.css";

const DraftPick = ({ pick, players, teams }) => {
  const player = players[pick.player_id];
  const playerName = player
    ? `${player.first_name} ${player.last_name}`
    : "unknown";
  const team = pick.metadata?.team || "unknown team";
  const userTeam = teams[pick.roster_id];

  return (
    <li className="pick-selection">
      <p className="pick-details">
        {player.position} - {team} {pick.round}.{pick.pick_no}
      </p>
      <img
        src={`https://sleepercdn.com/content/nfl/players/${pick.player_id}.jpg`}
        className="player-image"
      />
      <p className="drafted-player-name">{playerName}</p>
      <p className="team-drafting">{userTeam}</p>
    </li>
  );
};

DraftPick.propTypes = {
  pick: PropTypes.shape({
    player_id: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      team: PropTypes.string,
    }),
    round: PropTypes.number.isRequired,
    pick_no: PropTypes.number.isRequired,
    roster_id: PropTypes.number.isRequired,
  }).isRequired,
  players: PropTypes.objectOf(
    PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      position: PropTypes.string,
    })
  ).isRequired,
  teams: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default DraftPick;
