import TeamSchedule from "./TeamSchedule";
import "../schedules/Schedules.css";
import PageHeader from "../pageHeaders/PageHeader";
import { useFetchSchedules } from "../../constants/customHooks/useFetchSchedules";
import Spinner from "../loading/Spinner";

const Schedules = () => {
  const totalWeeks = 14;
  const {
    schedule,
    teams,
    loading,
    error,
    currentWeek,
    expandedTeams,
    toggleTeamSchedule,
    getMatchupsByTeam,
  } = useFetchSchedules(totalWeeks);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error loading schedules: {error.message}</div>;
  }

  return (
    <div className="schedules-container">
      <PageHeader pageTitle={"Team Schedules"} />
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
