import "../standings/Standings.css";
import PageHeader from "../pageHeaders/PageHeader";
import { useFetchStandings } from "../../constants/customHooks/useFetchStandings";

const Standings = () => {
  const { teams, loading, error } = useFetchStandings();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

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
                  <div className="points">
                    <div>PF: {team.pointsFor}</div>
                    <div>PA: {team.pointsAgainst}</div>
                  </div>
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
