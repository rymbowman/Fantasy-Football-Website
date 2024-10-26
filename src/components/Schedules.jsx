import { useState } from "react";
import {
  useFetchCurrentWeek,
  useFetchMatchups,
  useFetchTeams,
} from "../constants/customHooks";
import TeamSchedule from "./TeamSchedule";

const Schedules = () => {
  const totalWeeks = 14;
  const schedule = useFetchMatchups(totalWeeks);
  const teams = useFetchTeams();
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

  return (
    <div className="schedules-container">
      <h2>Team Schedules</h2>
      {Object.keys(teams).length > 0 && Object.keys(schedule).length > 0 ? (
        Object.keys(teams).map((rosterId) => (
          <div key={rosterId}>
            <button
              className="schedules-accordian"
              onClick={() => toggleTeamSchedule(rosterId)}
            >
              {teams[rosterId]}
              &apos;s Schedule
            </button>
            {expandedTeams[rosterId] && (
              <TeamSchedule
                key={rosterId}
                matchups={getMatchupsByTeam(
                  schedule,
                  teams,
                  rosterId,
                  totalWeeks
                )}
                currentWeek={currentWeek}
              />
            )}
          </div>
        ))
      ) : (
        <p>Loading Schedules ...</p>
      )}
    </div>
  );
};

export default Schedules;
