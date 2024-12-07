import { useEffect, useState } from "react";
import { fetchTeams } from "../fetchRequests/sleeperApi";

export const useFetchTeams = () => {
  const [teams, setTeams] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      fetchTeams().then(setTeams);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return { teams, loading, error };
};
