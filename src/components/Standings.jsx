import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/App.css";
const Standings = () => {
  const leagueId = "1048289149926760448";
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchFantasyLeague = async () => {
      try {
        const leagueUsers = await axios.get(
          `https://api.sleeper.app/v1/league/${leagueId}/users`
        );
        const leagueRosters = await axios.get(
          `https://api.sleeper.app/v1/league/${leagueId}/rosters`
        );
        let users = leagueUsers.data;
        let rosters = leagueRosters.data;

        const leagueTeams = rosters.map((roster) => {
          const team = users.find((u) => u.user_id === roster.owner_id);
          return {
            owner: team.username,
            teamName: team.metadata.team_name,
            wins: roster.settings.wins,
            losses: roster.settings.losses,
            ties: roster.settings.ties,
            pointsFor: roster.settings.fpts,
            pointsAgainst: roster.settings.fpts_against,
          };
        });

        const sortedStandings = leagueTeams.sort((a, b) => {
          if (a.wins !== b.wins) {
            return b.wins - a.wins;
          }
          return b.pointsFor - a.pointsFor;
        });
        setTeams(sortedStandings);
      } catch (err) {
        console.log("There was an error fetching this data.", err);
      }
    };
    fetchFantasyLeague();
  }, []);
  return (
    <div className="standings-container">
      <h2>League Standings</h2>
      {teams.length === 0 ? (
        "Loading..."
      ) : (
        <ul>
          {teams.map((team, index) => (
            <div key={index} className="standings-row">
              <div className="standings-teamNames">
                <h3>{team.teamName}</h3>
                <p>@{team.owner}</p>
              </div>
              <div className="standings-data">
                <p>
                  {team.wins} {team.losses} {team.ties} {team.pointsFor}{" "}
                  {team.pointsAgainst}
                </p>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Standings;
