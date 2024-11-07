import { useState } from "react";
import {
  useFetchCurrentWeek,
  useFetchMatchups,
  useFetchTeams,
} from "../../constants/customHooks";
import TeamSchedule from "./TeamSchedule";
import "../schedules/Schedules.css";
import PageHeader from "../pageHeaders/PageHeader";

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
      <PageHeader category={"schedules"} pageTitle={"Team Schedules"} />
      <div className="schedules">
        {Object.keys(teams).length > 0 && Object.keys(schedule).length > 0 ? (
          Object.keys(teams).map((rosterId) => (
            <div key={rosterId} className="schedule-container-row">
              <button
                className="schedules-accordian-button"
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
    </div>
  );
};

export default Schedules;
