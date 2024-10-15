import { useEffect, useState } from "react";
import {
  fetchLeagueTransactions,
  fetchAllPlayers,
  fetchUserData,
  leagueId,
} from "../constants/sleeperApi";
import axios from "axios";

const LeagueTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [players, setPlayers] = useState([]);
  const [rosters, setRosters] = useState([]);
  const [users, setUsers] = useState([]);
  const [matchingOwners, setMatchingOwners] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rostersData = await axios.get(
          `https://api.sleeper.app/v1/league/${leagueId}/rosters`
        );
        setRosters(rostersData.data);

        const ownerId = Object.values(rostersData.data).map(
          (roster) => roster.owner_id
        );
        console.log("owner ids:", ownerId);

        const usersData = await fetchUserData();
        console.log("user data:", usersData);

        const matchedOwners = ownerId.map((owner) => {
          const user = usersData.find((u) => u.user_id === owner);
          return {
            owner: owner,
            user: user ? user.display_name : null,
          };
        });
        console.log("matched owners:", matchedOwners);
        setMatchingOwners(matchedOwners);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>Matched Owners</p>
      <ul>
        {matchingOwners.map((ownerInfo, index) => (
          <li key={index} className="owner-info">
            {ownerInfo.owner} {ownerInfo.user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeagueTransactions;

// {transactions.length > 0 ? (
//     transactions.map((transaction, index) => (
//       <li key={index}>
//         {/* Loop through adds (playerId -> rosterId) */}
//         {transaction.adds &&
//           Object.entries(transaction.adds).map(([playerId, rosterId]) => (
//             <div key={playerId}>
//               Player {playerId} added to roster {rosterId}
//             </div>
//           ))}
//       </li>
//     ))
//   ) : (
//     <li>No transactions available</li>
//   )}
