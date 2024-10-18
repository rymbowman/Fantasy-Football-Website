import DirectoryCard from "../components/DirectoryCard";
import ExternalLinkCard from "../components/ExternalLinkCard";
import "../styles/LeagueSplashPages.css";
import Podcasts from "./Podcasts";
const Resources = () => {
  return (
    <div className="resources-page">
      <div className="dynasty-rankings">
        <h2 className="resource-section-title">Dynasty Rankings</h2>
        <iframe
          src="https://www.fantasypros.com/nfl/rankings/dynasty-overall.php"
          width="650"
          height="650"
          className="iframe"
        ></iframe>
      </div>
      <div className="trade-calc">
        <h2 className="resource-section-title">Trade Calculator</h2>
        <iframe
          src="https://dynastyleaguefootball.com/trade-analyzer/"
          width="650"
          height="650"
          className="iframe"
        ></iframe>
      </div>
      <Podcasts />
    </div>
  );
};

export default Resources;
//<div className="directory-pages">
//   <ExternalLinkCard
//     link={""}
//     title={"Dynasty Rankings"}
//     id={"dynasty-rankings-card"}
//   />
//   <DirectoryCard
//     link={"/podcasts"}
//     title={"Podcasts"}
//     id={"podcasts-card"}
//   />
//   <ExternalLinkCard
//     link={"/transactions"}
//     title={"Trade Calculator"}
//     id={"trade-calc-card"}
//   />
//   <ExternalLinkCard
//     link={"/league-leaders"}
//     title={"NFL News"}
//     id={"nfl-news-card"}
//   />
//   <DirectoryCard
//     link={"/trade-block"}
//     title={"Trade Block"}
//     id={"trade-block-card"}
//   />
// </div>
