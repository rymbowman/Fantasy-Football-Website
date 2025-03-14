import { useState, useEffect } from "react";
import {
  fetchMatchups,
  fetchPreviousLeague,
  fetchRosters,
  fetchUsers,
  previousLeagueId as leagueId,
} from "../fetchRequests/sleeperApi";

export const useFetchLeaguesData = (players) => {
  const [leaguesData, setLeaguesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeagueData = async (leagueId) => {
      try {
        const [league, rosters, users, matchupsWeek16, matchupsWeek17] =
          await Promise.all([
            fetchPreviousLeague(leagueId),
            fetchRosters(leagueId),
            fetchUsers(leagueId),
            fetchMatchups(leagueId, 16),
            fetchMatchups(leagueId, 17),
          ]);

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

        const getRosterAndUser = (team) => {
          const roster = rosters.find((r) => r.roster_id === team.roster_id);
          const user = users.find((u) => u.user_id === roster.owner_id);
          return { roster, user, points: team.points };
        };

        const {
          roster: champRoster,
          user: champUser,
          points: champPoints,
        } = team1.points > team2.points
          ? getRosterAndUser(team1)
          : getRosterAndUser(team2);
        const {
          roster: runnerUpRoster,
          user: runnerUpUser,
          points: runnerUpPoints,
        } = team1.points > team2.points
          ? getRosterAndUser(team2)
          : getRosterAndUser(team1);

        const getTeamStats = (team) => {
          return team.starters.map((playerId, index) => ({
            position: players[playerId]?.position,
            team: players[playerId]?.team,
            name:
              players[playerId]?.first_name && players[playerId]?.last_name
                ? `${players[playerId].first_name} ${players[playerId].last_name}`
                : "unknown player",
            points: team.starters_points[index],
            playerId: playerId,
          }));
        };

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

        return {
          year: league.season,
          champion: {
            username: champUser
              ? champUser.display_name || champUser.username
              : "miahpersson",
            points: champPoints,
            stats: getTeamStats(
              team1.points > team2.points ? team1 : team2,
              champRoster
            ),
          },
          runnerUp: {
            username: runnerUpUser.display_name || runnerUpUser.username,
            points: runnerUpPoints,
            stats: getTeamStats(
              team1.points > team2.points ? team2 : team1,
              runnerUpRoster
            ),
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
