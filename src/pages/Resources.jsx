import DirectoryCard from "../components/directoryCards/DirectoryCard";
import ExternalLinkCard from "../components/directoryCards/ExternalLinkCard";
import "../styles/LeagueSplashPages.css";

const Resources = () => {
  return (
    <div className="directory-pages">
      <ExternalLinkCard
        link={""}
        title={"Dynasty Rankings"}
        id={"dynasty-rankings-card"}
      />
      <DirectoryCard
        link={"/podcasts"}
        title={"Podcasts"}
        id={"podcasts-card"}
      />
      <ExternalLinkCard
        link={"/transactions"}
        title={"Trade Calculator"}
        id={"trade-calc-card"}
      />
    </div>
  );
};

export default Resources;
