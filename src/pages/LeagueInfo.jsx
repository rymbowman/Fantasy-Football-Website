import DirectoryCard from "../components/DirectoryCard";

const LeagueInfo = () => {
  return (
    <div className="directory-pages">
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
      <DirectoryCard
        link={"/league-leaders"}
        title={"League Leaders"}
        id={"league-leaders-card"}
      />
      <DirectoryCard
        link={"/trade-block"}
        title={"Trade Block"}
        id={"trade-block-card"}
      />
    </div>
  );
};

export default LeagueInfo;
