import Punishment from "../components/Punishment";
import "../App.css";
import LeagueMatchups from "../components/LeagueMatchups";
const PastPunishments = () => {
  return (
    <div className="history-content" id="past-punishments">
      <Punishment />
      <LeagueMatchups />
    </div>
  );
};

export default PastPunishments;
