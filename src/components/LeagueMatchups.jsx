import { useEffect, useState } from "react";
import axios from "axios";

const LeagueMatchups = () => {
  const [leagueMatchup, setLeagueMatchup] = useState([]);
  const [users, setUsers] = useState([]);
  const [rosters, setRosters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalWeeks = 18;
        const leagueId = "1048289149926760448";

        let weekMatchups = [];
        for (let week = 1; week < totalWeeks; week++) {
          let response = await axios.get(
            `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`
          );
          const allMatchups = response.data;
          const uniqueMatchups = [];
          allMatchups.forEach((matchup) => {
            const alreadyIncluded = uniqueMatchups.some(
              (m) => m.roster_id === matchup.roster_id
            );
            if (!alreadyIncluded) {
              uniqueMatchups.push(matchup);
            }
          });
          weekMatchups.push({ week, matchups: uniqueMatchups });
        }
        setLeagueMatchup(weekMatchups);

        const userDataResponse = await axios.get("/users.json");
        let userData = userDataResponse.data;
        setUsers(userData);

        const rosterResponse = await axios.get(
          `https://api.sleeper.app/v1/league/${leagueId}/rosters`
        );
        const leagueRosters = rosterResponse.data;
        setRosters(leagueRosters);
      } catch (err) {
        console.log("error fetching data", err);
      }
    };
    fetchData();
  }, []);

  const getTeamName = (roster_id) => {
    const roster = rosters.find((r) => r.roster_id === roster_id);
    const user = users.find((u) => u.user_id === roster?.owner_id);
    return user ? user.team_name : "unknown team name";
  };
  return (
    <div className="league-matchups">
      <h1>League Matchups</h1>
      {leagueMatchup.map((weekData) => {
        return (
          <div key={weekData.week}>
            <h2>Week: {weekData.week}</h2>
            <ul>
              {weekData.matchups.map((matchup, index) => (
                <li key={index}>
                  {getTeamName(matchup.roster_id)} vs.{" "}
                  {getTeamName(matchup.matchup_id)}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default LeagueMatchups;
