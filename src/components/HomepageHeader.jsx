import VerseOfDay from "./VerseOfDay";
import "../styles/App.css";
const HomepageHeader = () => {
  return (
    <div className="homepage-header">
      <h1 id="homepage-title">Flames Fantasy</h1>
      <VerseOfDay />
    </div>
  );
};

export default HomepageHeader;
