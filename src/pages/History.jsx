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
      <DirectoryCard link={"/"} title={"Champions"} id={"champs-card"} />
      <DirectoryCard
        link={"/draft-results"}
        title={"Draft Results"}
        id={"drafts-card"}
      />
      <DirectoryCard
        link={"/"}
        title={"All-Time Records"}
        id={"records-card"}
      />
    </div>
  );
};

export default History;
