import DirectoryCard from "../components/directoryCards/DirectoryCard";
import PageHeader from "../components/pageHeaders/PageHeader";
import "../styles/LeagueSplashPages.css";
const LeagueInfo = () => {
  return (
    <div className="directory-pages">
      <PageHeader category={"directory"} pageTitle={"League Information"} />
      <DirectoryCard
        link={"/standings"}
        title={"Standings/Rankings"}
        id={"standings-rankings-card"}
      />
      <DirectoryCard
        link={"/schedules"}
        title={"Schedules"}
        id={"schedules-card"}
      />
      <DirectoryCard
        link={"/transactions"}
        title={"Transactions"}
        id={"transactions-card"}
      />
    </div>
  );
};

export default LeagueInfo;
