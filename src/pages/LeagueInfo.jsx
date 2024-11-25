import DirectoryCard from "../components/directoryCards/DirectoryCard";
import PageHeader from "../components/pageHeaders/PageHeader";
import "../styles/LeagueSplashPages.css";
const LeagueInfo = () => {
  return (
    <div className="directory-pages">
      <PageHeader category={"directory"} pageTitle={"League Information"} />
      <DirectoryCard
        link={"/standings"}
        title={"Standings"}
        id={"standings-rankings-card"}
      />
      <DirectoryCard
        link={"/transactions"}
        title={"Transactions"}
        id={"transactions-card"}
      />
      <DirectoryCard
        link={"/schedules"}
        title={"Schedules"}
        id={"schedules-card"}
      />
    </div>
  );
};

export default LeagueInfo;
