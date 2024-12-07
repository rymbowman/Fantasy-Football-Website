import axios from "axios";
import { useEffect, useState } from "react";
import { leagueId } from "../sleeperApi";

export const useFetchStandings = () => {
  const [teams, setTeams] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
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
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStandings();
  }, []);
  return { teams, loading, error };
};
