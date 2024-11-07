import { useEffect, useState } from "react";
import { leagueId } from "../../constants/sleeperApi";
import axios from "axios";
import "../drafts/Drafts.css";

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);
  const [draftPicks, setDraftPicks] = useState([]);
  const [selectedDraftId, setSelectedDraftId] = useState(null);
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState({});
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const fetchLeagueDrafts = async () => {
      try {
        const resultsData = await axios.get(
          `https://api.sleeper.app/v1/league/${leagueId}/drafts`
        );

        const resultUsers = await axios.get(
          `https://api.sleeper.app/v1/league/${leagueId}/users`
        );
        const users = resultUsers.data;

        const resultRosters = await axios.get(
          `https://api.sleeper.app/v1/league/${leagueId}/rosters`
        );

        const rosters = resultRosters.data;

        const leagueTeams = {};
        rosters.forEach((roster) => {
          const user = users.find((u) => u.user_id === roster.owner_id);
          if (user) {
            leagueTeams[roster.roster_id] = user.display_name;
          }
        });

        setDrafts(resultsData.data);
        setTeams(leagueTeams);
      } catch (error) {
        console.log("error fetching league drafts", error);
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

    fetchLeagueDrafts();
    fetchPlayers();
  }, []);

  const fetchDraftPicks = async (draftID) => {
    if (selectedDraftId === draftID) {
      // If the draft is already selected, collapse it by clearing picks
      setSelectedDraftId(null);
      setDraftPicks([]);
      setDisplay(false);
      return;
    }
    try {
      const result = await axios.get(
        `https://api.sleeper.app/v1/draft/${draftID}/picks`
      );
      setDraftPicks(result.data);
      setSelectedDraftId(draftID);
      setDisplay(true);
    } catch (error) {
      console.log("error fetching picks", error);
    }
  };
  return (
    <div className="drafts-container">
      <div className="draft-header-div">
        <h1 className="drafts-h1">Drafts</h1>
      </div>
      {drafts.length > 0 ? (
        <ul className="draft-season-section">
          {drafts.map((draft) => (
            <li key={draft} className="draft-li">
              <p className="drafts-season">{draft.season}</p>
              <button
                className="display-draft-btn"
                onClick={() => fetchDraftPicks(draft.draft_id)}
              >
                {" "}
                {display ? "hide draft" : "show draft"}
              </button>
              {selectedDraftId === draft.draft_id && draftPicks.length > 0 ? (
                <div className="draft">
                  <ul className="draft-results-grid">
                    {draftPicks.map((pick, index) => {
                      const player = players[pick.player_id];
                      const playerName = player
                        ? `${player.first_name} ${player.last_name}`
                        : "unknown";
                      const team = pick.metadata?.team || "unknown team";
                      const userTeam = teams[pick.roster_id];
                      return (
                        <li key={index} className="pick-selection">
                          <p className="pick-details">
                            {player.position} - {team} {pick.round}.
                            {pick.pick_no}
                          </p>
                          <img
                            src={`https://sleepercdn.com/content/nfl/players/${pick.player_id}.jpg`}
                            className="player-image"
                          />
                          <p className="drafted-player-name">{playerName}</p>
                          <p className="team-drafting">{userTeam}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p>Drafts still loading</p>
      )}
    </div>
  );
};

export default Drafts;
