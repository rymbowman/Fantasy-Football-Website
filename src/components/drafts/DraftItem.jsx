import DraftPick from "./DraftPick";
import "../drafts/Drafts.css";
import { useFetchDraftPicks } from "../../constants/customHooks/useFetchDrafts";
import PropTypes from "prop-types";

const DraftItem = ({ draft, players, teams }) => {
  const {
    draftPicks,
    selectedDraftId,
    display,
    fetchDraftPicks,
    loading,
    error,
  } = useFetchDraftPicks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <li className="draft-li">
      <p className="drafts-season">{draft.season}</p>
      <button
        className="display-draft-btn"
        onClick={() => fetchDraftPicks(draft.draft_id)}
      >
        {display ? "hide draft" : "show draft"}
      </button>
      {selectedDraftId === draft.draft_id && draftPicks.length > 0 ? (
        <div className="draft">
          <ul className="draft-results-grid">
            {draftPicks.map((pick, index) => (
              <DraftPick
                key={index}
                pick={pick}
                players={players}
                teams={teams}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
};

DraftItem.propTypes = {
  draft: PropTypes.shape({
    season: PropTypes.string.isRequired,
    draft_id: PropTypes.string.isRequired,
  }).isRequired,
  players: PropTypes.objectOf(
    PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      position: PropTypes.string,
    })
  ).isRequired,
  teams: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default DraftItem;
