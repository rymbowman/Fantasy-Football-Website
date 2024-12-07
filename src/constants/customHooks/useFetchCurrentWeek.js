import { useEffect, useState } from "react";
import { fetchCurrentWeek } from "../sleeperApi";

export const useFetchCurrentWeek = () => {
  const [currentWeek, setCurrentWeek] = useState(null);
  useEffect(() => {
    fetchCurrentWeek().then(setCurrentWeek).catch(console.error);
  }, []);
  return currentWeek;
};
