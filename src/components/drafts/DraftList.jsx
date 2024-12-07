import DraftItem from "./DraftItem";
import "../drafts/Drafts.css";
import { useFetchDrafts } from "../../constants/customHooks/useFetchDrafts";
import PageHeader from "../pageHeaders/PageHeader";
import Spinner from "../loading/Spinner";

const DraftList = () => {
  const { drafts, players, teams, loading, error } = useFetchDrafts();

  if (loading) return <Spinner />;
  if (error) return <div>Error loading data</div>;
  return (
    <div className="drafts-container">
      <PageHeader pageTitle={"Draft History"} />
      {drafts.length > 0 ? (
        <ul className="draft-season-section">
          {drafts.map((draft, index) => (
            <DraftItem
              key={index}
              draft={draft}
              players={players}
              teams={teams}
            />
          ))}
        </ul>
      ) : (
        <p>Drafts still loading</p>
      )}
    </div>
  );
};

export default DraftList;
