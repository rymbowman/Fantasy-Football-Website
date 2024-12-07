import { useEffect, useState } from "react";
import { fetchWeeklyMatchups } from "../fetchRequests/sleeperApi";

export const useFetchMatchups = (totalWeeks) => {
  const [schedule, setSchedule] = useState({});
  useEffect(() => {
    fetchWeeklyMatchups(totalWeeks).then(setSchedule).catch(console.error);
  }, [totalWeeks]);
  return schedule;
};
