import { useEffect, useState } from "react";
import { fetchPlayers } from "../sleeperApi";

export const useFetchPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchAndSetPlayers = async () => {
        try {
          const playersData = await fetchPlayers();
          setPlayers(playersData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchAndSetPlayers();
    }, []);
    return { players, loading, error };
  };
  