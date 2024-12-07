import { useEffect, useState } from "react";
import axios from "axios";
import { leagueId } from "../sleeperApi";
import { useFetchPlayers } from "./useFetchPlayers";

export const useFetchDrafts = () => {
  const [drafts, setDrafts] = useState([]);
  const [teams, setTeams] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    players,
    loading: playersLoading,
    error: playersError,
  } = useFetchPlayers();

  useEffect(() => {
    const fetchLeagueDrafts = async (currentLeagueId) => {
      let currentLeague = currentLeagueId;
      let allDrafts = [];
      let allTeams = {};

      while (currentLeague) {
        try {
          const resultsDrafts = await axios.get(
            `https://api.sleeper.app/v1/league/${currentLeague}/drafts`
          );
          allDrafts = [...allDrafts, ...resultsDrafts.data];

          const resultUsers = await axios.get(
            `https://api.sleeper.app/v1/league/${currentLeague}/users`
          );
          const users = resultUsers.data;

          const resultRosters = await axios.get(
            `https://api.sleeper.app/v1/league/${currentLeague}/rosters`
          );
          const rosters = resultRosters.data;

          rosters.forEach((roster) => {
            const user = users.find((u) => u.user_id === roster.owner_id);
            if (user) {
              allTeams[roster.roster_id] = user.display_name;
            }
          });

          // Fetch the current league data to get the previous league ID
          const resultLeague = await axios.get(
            `https://api.sleeper.app/v1/league/${currentLeague}`
          );
          const leagueData = resultLeague.data;

          // Update the current league ID to the previous league ID
          currentLeague = leagueData.previous_league_id;
        } catch (error) {
          console.error("Error fetching league data:", error);
          setError(error);
          setLoading(false);
          break;
        }
      }
      setDrafts(allDrafts);
      setTeams(allTeams);
      setLoading(false);
    };
    if (!playersLoading && !playersError) {
      fetchLeagueDrafts(leagueId);
    }
  }, [playersLoading, playersError]);

  return {
    drafts,
    players,
    teams,
    loading,
    error,
  };
};

export const useFetchDraftPicks = () => {
  const [draftPicks, setDraftPicks] = useState([]);
  const [selectedDraftId, setSelectedDraftId] = useState(null);
  const [display, setDisplay] = useState(false);
  const [picksLoading, setPicksLoading] = useState(true);
  const [picksError, setPicksError] = useState(null);

  const fetchDraftPicks = async (draftID) => {
    if (selectedDraftId === draftID) {
      // If the draft is already selected, collapse it by clearing picks
      setSelectedDraftId(null);
      setDraftPicks([]);
      setDisplay(false);
      return;
    }

    try {
      const result = await axios.get(
        `https://api.sleeper.app/v1/draft/${draftID}/picks`
      );
      setDraftPicks(result.data);
      setSelectedDraftId(draftID);
      setDisplay(true);
    } catch (err) {
      setPicksError("error fetching picks", err);
    } finally {
      setPicksLoading(false);
    }
  };

  return {
    draftPicks,
    selectedDraftId,
    display,
    fetchDraftPicks,
    picksLoading,
    picksError,
  };
};
