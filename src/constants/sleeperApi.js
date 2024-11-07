import axios from "axios";

export const leagueId = "1048289149926760448";

export const fetchMatchups = async (totalWeeks) => {
  const promises = [];
  for (let week = 1; week <= totalWeeks; week++) {
    promises.push(
      axios.get(
        `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`
      )
    );
  }
  const allWeekMatchups = await Promise.all(promises);

  const matchupsByWeek = {};
  allWeekMatchups.forEach((weekData, index) => {
    matchupsByWeek[`week${index + 1}`] = weekData.data;
  });
  return matchupsByWeek;
};

export const fetchTeams = async () => {
  const resultRosters = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}/rosters`
  );
  const resultUsers = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}/users`
  );
  const rosters = resultRosters.data;
  const users = resultUsers.data;

  const leagueTeams = {};
  rosters.forEach((roster) => {
    const user = users.find((u) => u.user_id === roster.owner_id);
    if (user) {
      leagueTeams[roster.roster_id] = user.display_name;
    }
  });
  return leagueTeams;
};

export const fetchCurrentWeek = async () => {
  const resultsData = await axios.get("https://api.sleeper.app/v1/state/nfl");
  const currentLeagueState = resultsData.data;
  const currentWeek = currentLeagueState.week;
  return currentWeek;
};

export const fetchLeagueDrafts = async () => {
  const resultsData = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}/drafts`
  );
  const leagueDrafts = resultsData.data;
  return leagueDrafts
};
