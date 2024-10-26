import { useState, useEffect } from "react";
import { fetchMatchups, fetchTeams, fetchCurrentWeek } from "./sleeperApi";

export const useFetchMatchups = (totalWeeks) => {
  const [schedule, setSchedule] = useState({});
  useEffect(() => {
    fetchMatchups(totalWeeks).then(setSchedule).catch(console.error);
  }, [totalWeeks]);
  return schedule;
};

export const useFetchTeams = () => {
  const [teams, setTeams] = useState({});
  useEffect(() => {
    fetchTeams().then(setTeams).catch(console.error);
  }, []);
  return teams;
};

export const useFetchCurrentWeek = () => {
  const [currentWeek, setCurrentWeek] = useState(null);
  useEffect(() => {
    fetchCurrentWeek().then(setCurrentWeek).catch(console.error);
  }, []);
  return currentWeek;
};
