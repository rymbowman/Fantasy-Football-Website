import { useState } from "react";
import { useFetchTeams } from "./useFetchTeams";
import { useFetchMatchups } from "./useFetchMatchups";
import { useFetchCurrentWeek } from "./useFetchCurrentWeek";

export const useFetchSchedules = (totalWeeks) => {
  const schedule = useFetchMatchups(totalWeeks);
  const { teams, loading, error } = useFetchTeams();
  const currentWeek = useFetchCurrentWeek();
  const [expandedTeams, setExpandedTeams] = useState({});

  const getMatchupsByTeam = (schedule, teams, rosterID, totalWeeks) => {
    const teamSchedule = [];

    for (let week = 1; week <= totalWeeks; week++) {
      const matchups = schedule[`week${week}`];

      if (matchups) {
        const matchup = matchups.find(
          (m) => m.roster_id === parseInt(rosterID)
        );

        if (matchup) {
          const opponent = matchups.find(
            (m) =>
              m.matchup_id === matchup.matchup_id &&
              m.roster_id !== parseInt(rosterID)
          );

          teamSchedule.push({
            week,
            opponent: teams[opponent?.roster_id] || "unknown opponent",
            points: matchup.points || null,
            opponentPoints: opponent?.points,
          });
        }
      }
    }
    return teamSchedule;
  };

  const toggleTeamSchedule = (rosterId) => {
    setExpandedTeams((prev) => ({ ...prev, [rosterId]: !prev[rosterId] }));
  };

  return {
    schedule,
    teams,
    loading,
    error,
    currentWeek,
    expandedTeams,
    toggleTeamSchedule,
    getMatchupsByTeam,
  };
};
