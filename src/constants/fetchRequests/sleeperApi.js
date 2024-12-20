import axios from "axios";

// Current League ID for the 2024 season
export const leagueId = "1048289149926760448";
// Previous League ID for the 2023 season
export const previousLeagueId = "918270675058634752";

// Fetch each week's matchups for a league
export const fetchWeeklyMatchups = async (totalWeeks) => {
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

// Fetch Teams for a league
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

// Fetch the current week in the season
export const fetchCurrentWeek = async () => {
  const resultsData = await axios.get("https://api.sleeper.app/v1/state/nfl");
  const currentLeagueState = resultsData.data;
  const currentWeek = currentLeagueState.week;
  return currentWeek;
};

// Fetch a league's draft data
export const fetchLeagueDrafts = async () => {
  const resultsData = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}/drafts`
  );
  const leagueDrafts = resultsData.data;
  return leagueDrafts;
};

// Fetch a league's data
export const fetchPreviousLeague = async (leagueId) => {
  const response = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}`
  );
  return response.data;
};

// Fetch a league's rosters
export const fetchRosters = async (leagueId) => {
  const response = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}/rosters`
  );
  return response.data;
};

// Fetch a league's users
export const fetchUsers = async (leagueId) => {
  const response = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}/users`
  );
  return response.data;
};

// Fetch a league's matchups
export const fetchMatchups = async (leagueId, week) => {
  const response = await axios.get(
    `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`
  );
  return response.data;
};

// Fetch all NFL players data from the Sleeper API
export const fetchPlayers = async () => {
  try {
    const response = await axios.get("https://api.sleeper.app/v1/players/nfl");
    return response.data;
  } catch (err) {
    console.error("error fetching players", err);
  }
};
