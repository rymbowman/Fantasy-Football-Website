import DirectoryCard from "../components/DirectoryCard";
import "../styles/App.css";
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
        link={"/previous-drafts"}
        title={"Draft Results"}
        id={"drafts-card"}
      />
      <DirectoryCard
        link={"/all-time-records"}
        title={"All-Time Records"}
        id={"records-card"}
      />
    </div>
  );
};

export default History;
