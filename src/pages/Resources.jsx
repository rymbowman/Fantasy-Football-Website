import DirectoryCard from "../components/directoryCards/DirectoryCard";
import ExternalLinkCard from "../components/directoryCards/ExternalLinkCard";
import PageHeader from "../components/pageHeaders/PageHeader";
import "../styles/LeagueSplashPages.css";
import "../styles/Resources.css";

const Resources = () => {
  return (
    <div className="directory-pages">
      <PageHeader category={"directory"} pageTitle={"Resources"} />
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
