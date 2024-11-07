import DirectoryCard from "../components/directoryCards/DirectoryCard";
import "../styles/HistoryPage.css";
const History = () => {
  return (
    <div className="directory-pages">
      <DirectoryCard
        link={"/past-punishments"}
        title={"Past Punishments"}
        id={"punishments-card"}
      />
      <DirectoryCard
        link={"/past-champions"}
        title={"Champions"}
        id={"champs-card"}
      />
      <DirectoryCard
        link={"/draft-results"}
        title={"Draft Results"}
        id={"drafts-card"}
      />
    </div>
  );
};

export default History;
