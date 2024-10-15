import axios from "axios";

export const leagueId = "1048289149926760448";
const totalWeeks = 18;

export const fetchAllPlayers = async () => {
  const response = await axios.get("https://api.sleeper.app/v1/players/nfl");
  return response.data;
};

export const fetchUserData = async () => {
  const response = await axios.get("/users.json");
  return response.data;
};

export const fetchLeagueTransactions = async () => {
  const promises = [];

  for (let week = 1; week <= totalWeeks; week++) {
    promises.push(
      axios.get(
        `https://api.sleeper.app/v1/league/${leagueId}/transactions/${week}`
      )
    );
    const allWeekResponses = await Promise.all(promises);
    let allTransactions = [];
    allWeekResponses.forEach((response) => {
      let weekTransactions = response.data;
      allTransactions = [
        ...allTransactions,
        ...Object.values(weekTransactions),
      ];
    });
    // const pickPromises = [];
    // for (let week = 1; week <= totalWeeks; week++) {
    //   pickPromises.push(
    //     axios.get(
    //       `https://api.sleeper.app/v1/league/${leagueId}/draft/picks/${week}`
    //     )
    //   );
    // }

    // const allPickResponses = await Promise.all(pickPromises);
    // let allDraftPicks = [];
    // allPickResponses.forEach((pickResponse) => {
    //   let weekPicks = pickResponse.data;
    //   allDraftPicks = [...allDraftPicks, ...Object.values(weekPicks)];
    // });
    const sortedTransactions = allTransactions.sort((a, b) => {
      return b.leg - a.leg;
    });
    return { transactions: sortedTransactions };
  }
};
