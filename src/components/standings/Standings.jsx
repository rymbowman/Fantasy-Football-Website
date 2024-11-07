import axios from "axios";
import { useState, useEffect } from "react";
import "../standings/Standings.css";
import PageHeader from "../pageHeaders/PageHeader";
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
            owner: team.display_name,
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
      <PageHeader category={"standings"} pageTitle={"League Standings"} />
      <div className="standings">
        {teams.length === 0 ? (
          "Loading..."
        ) : (
          <ul>
            {teams.map((team, index) => (
              <div key={index} className="standings-row">
                <div className="standings-details">
                  <div className="standings-position">
                    <p>{index + 1}</p>
                  </div>
                  <div className="team-details">
                    {team.teamName ? (
                      <>
                        <h3 className="name">{team.teamName}</h3>
                      </>
                    ) : (
                      <>
                        <h3 className="name">{`Team ${team.owner}`}</h3>
                      </>
                    )}
                    <p className="username">@{team.owner}</p>
                  </div>
                </div>
                <div className="standings-data">
                  <p className="record">
                    {team.wins}-{team.losses}-{team.ties}
                  </p>
                  <p className="points">
                    PF: {team.pointsFor} &nbsp; PA: {team.pointsAgainst}
                  </p>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Standings;
