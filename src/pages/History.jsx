import DirectoryCard from "../components/directoryCards/DirectoryCard";
import PageHeader from "../components/pageHeaders/PageHeader";
import "../styles/HistoryPage.css";
import "../styles/LeagueSplashPages.css";
const History = () => {
  return (
    <div className="directory-pages">
      <PageHeader category={"directory"} pageTitle={"League History"} />
      <DirectoryCard
        link={"/past-champions"}
        title={"Past Champions"}
        id={"champs-card"}
      />
      <DirectoryCard
        link={"/league-punishments"}
        title={"League Punishments"}
        id={"punishments-card"}
      />
      <DirectoryCard
        link={"/draft-classes"}
        title={"Draft Classes"}
        id={"drafts-card"}
      />
    </div>
  );
};

export default History;
