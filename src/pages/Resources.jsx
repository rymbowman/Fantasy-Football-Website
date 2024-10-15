import DirectoryCard from "../components/DirectoryCard";
import ExternalLinkCard from "../components/ExternalLinkCard";
import "../styles/LeagueSplashPages.css";
const Resources = () => {
  return (
    <div className="directory-pages">
      <ExternalLinkCard
        link={"https://www.fantasypros.com/nfl/rankings/dynasty-overall.php"}
        title={"Dynasty Rankings"}
        id={"dynasty-rankings-card"}
      />
      <DirectoryCard
        link={"/schedules"}
        title={"Podcasts"}
        id={"podcasts-card"}
      />
      <ExternalLinkCard
        link={"/transactions"}
        title={"Trade Calculator"}
        id={"trade-calc-card"}
      />
      <ExternalLinkCard
        link={"/league-leaders"}
        title={"NFL News"}
        id={"nfl-news-card"}
      />
      <DirectoryCard
        link={"/trade-block"}
        title={"Trade Block"}
        id={"trade-block-card"}
      />
    </div>
  );
};

export default Resources;
