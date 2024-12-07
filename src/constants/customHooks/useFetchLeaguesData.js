import { useState, useEffect } from "react";
import {
  fetchMatchups,
  fetchPreviousLeague,
  fetchRosters,
  fetchUsers,
  leagueId,
} from "../fetchRequests/sleeperApi";

export const useFetchLeaguesData = (players) => {
  const [leaguesData, setLeaguesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeagueData = async (leagueId) => {
      try {
        const league = await fetchPreviousLeague(leagueId);

        // Fetch data for the previous league (2023 season)
        const rosters = await fetchRosters(leagueId);
        const users = await fetchUsers(leagueId);

        // Fetch matchups for both week 16 and week 17
        const matchupsWeek16 = await fetchMatchups(leagueId, 16);
        const matchupsWeek17 = await fetchMatchups(leagueId, 17);

        // Determine the championship week
        const week16MatchupIds = new Set(
          matchupsWeek16.map((m) => m.matchup_id)
        );
        const week17MatchupIds = new Set(
          matchupsWeek17.map((m) => m.matchup_id)
        );

        let championshipWeek = null;
        if (week16MatchupIds.size <= 3) {
          championshipWeek = 16;
        } else if (week17MatchupIds.size <= 3) {
          championshipWeek = 17;
        }

        if (!championshipWeek) {
          console.error(
            `No championship week found in the ${league.season} league year.`
          );
          setLoading(false);
          return { previousLeagueId: league.previous_league_id };
        }

        // Fetch the championship matchup details
        const championshipMatchups = await fetchMatchups(
          leagueId,
          championshipWeek
        );

        const championshipMatchup = championshipMatchups.filter(
          (matchup) => matchup.matchup_id === 1
        );

        if (championshipMatchup.length !== 2) {
          console.error("No championship matchup found", `(${league.season})`);
          return null;
        }

        const team1 = championshipMatchup[0];
        const team2 = championshipMatchup[1];

        let champRoster, champUser, champPoints;
        let runnerUpRoster, runnerUpUser, runnerUpPoints;

        if (team1.points > team2.points) {
          champRoster = rosters.find(
            (roster) => roster.roster_id === team1.roster_id
          );
          champUser = users.find(
            (user) => user.roster_id === champRoster.owner_id
          );
          champPoints = team1.points;

          runnerUpRoster = rosters.find(
            (roster) => roster.roster_id === team2.roster_id
          );
          runnerUpUser = users.find(
            (user) => user.user_id === runnerUpRoster.owner_id
          );
          runnerUpPoints = team2.points;
        } else {
          champRoster = rosters.find(
            (roster) => roster.roster_id === team2.roster_id
          );
          champUser = users.find(
            (user) => user.user_id === champRoster.owner_id
          );
          champPoints = team2.points;

          runnerUpRoster = rosters.find(
            (roster) => roster.roster_id === team1.roster_id
          );
          runnerUpUser = users.find(
            (user) => user.user_id === runnerUpRoster.owner_id
          );
          runnerUpPoints = team1.points;
        }

        if (!champUser) {
          console.error(
            `Champion user not found for the ${league.season} league year, proceeding with available data`
          );
        }

        if (!runnerUpUser) {
          console.error(
            `Runner-Up user not found for the ${league.season} league year, proceeding with available data`
          );
        }

        const champTeam = championshipMatchup.find(
          (matchup) => matchup.roster_id === champRoster.roster_id
        );
        const runnerUpTeam = championshipMatchup.find(
          (matchup) => matchup.roster_id === runnerUpRoster.roster_id
        );

        return {
          year: league.season,
          champion: {
            username: champUser
              ? champUser.display_name || champUser.username
              : "miahpersson",
            points: champPoints,
            stats: champTeam.starters.map((playerId, index) => ({
              position: players[playerId]?.position,
              team: players[playerId]?.team,
              name:
                players[playerId]?.first_name && players[playerId]?.last_name
                  ? `${players[playerId].first_name} ${players[playerId].last_name}`
                  : "unknown player",
              points: champTeam.starters_points[index],
              playerId: playerId,
            })),
          },
          runnerUp: {
            username: runnerUpUser.display_name || runnerUpUser.username,
            points: runnerUpPoints,
            stats: runnerUpTeam.starters.map((playerId, index) => ({
              position: players[playerId]?.position,
              team: players[playerId]?.team,
              name:
                players[playerId]?.first_name && players[playerId]?.last_name
                  ? `${players[playerId].first_name} ${players[playerId].last_name}`
                  : "unknown player",
              points: runnerUpTeam.starters_points[index],
              playerId: playerId,
            })),
          },
          previousLeagueId: league.previous_league_id,
        };
      } catch (err) {
        console.error("error fetching league data", err);
        throw err;
      }
    };

    const fetchAllLeaguesData = async (initialLeagueId) => {
      try {
        let currentLeagueId = initialLeagueId;
        const allLeaguesData = [];

        while (currentLeagueId) {
          const leagueData = await fetchLeagueData(currentLeagueId);
          if (!leagueData) break;
          if (leagueData.year) {
            allLeaguesData.push(leagueData);
          }
          currentLeagueId = leagueData.previousLeagueId;
        }
        setLeaguesData(allLeaguesData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (Object.keys(players).length > 0) {
      fetchAllLeaguesData(leagueId);
    }
  }, [players]);

  return { leaguesData, loading, error };
};
