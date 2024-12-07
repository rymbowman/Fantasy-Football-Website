import { useMemo, useState } from "react";
import PageHeader from "../pageHeaders/PageHeader";
import "../previousChampions/PreviousChampions.css";
import MatchupSummary from "./MatchupSummary";
import MatchupBoxScore from "./MatchupBoxScore";
import { useFetchLeaguesData } from "../../constants/customHooks/useFetchLeaguesData";
import { useFetchPlayers } from "../../constants/customHooks/useFetchPlayers";

const PreviousChampions = () => {
  const {
    players,
    loading: playersLoading,
    error: playersError,
  } = useFetchPlayers();
  const {
    leaguesData,
    loading: leaguesLoading,
    error: leaguesError,
  } = useFetchLeaguesData(players);

  const [activeBoxScores, setActiveBoxScores] = useState({});
  const loading = playersLoading || leaguesLoading;
  const error = playersError || leaguesError;

  const memoizedLeaguesData = useMemo(() => leaguesData, [leaguesData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const toggleBoxscore = (index) => {
    setActiveBoxScores((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the current index
    }));
  };

  return (
    <div className="previous-champions-container">
      <PageHeader pageTitle={"League Champions"} />
      <div className="champion-div">
        {memoizedLeaguesData.map((league, index) => (
          <div key={index} className="champion-item">
            <MatchupSummary
              league={league}
              index={index}
              toggleBoxscore={toggleBoxscore}
              activeBoxScores={activeBoxScores}
            />
            {activeBoxScores[index] && <MatchupBoxScore league={league} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousChampions;
