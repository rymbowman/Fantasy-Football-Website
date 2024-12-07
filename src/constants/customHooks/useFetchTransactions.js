import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchTransactions = (leagueId) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const promises = [];
        const totalWeeks = 18;
        for (let week = 1; week <= totalWeeks; week++) {
          promises.push(
            axios.get(
              `https://api.sleeper.app/v1/league/${leagueId}/transactions/${week}`
            )
          );
        }
        const allWeekTransactions = await Promise.all(promises);
        let allTransactions = [];
        allWeekTransactions.forEach((week) => {
          let weekTransactions = week.data;
          const successfulTransactions = Object.values(weekTransactions).filter(
            (tran) => tran.status === "complete"
          );
          allTransactions = [...allTransactions, ...successfulTransactions];
        });

        const sortedTransactions = allTransactions.sort((a, b) => {
          return b.status_updated - a.status_updated;
        });

        setTransactions(sortedTransactions);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [leagueId]);

  return { transactions, loading, error };
};
