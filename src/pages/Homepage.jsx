import HomepageHeader from "../components/HomepageHeader";
import CurrentSlideAction from "../components/CurrentSlideAction";
import "../styles/App.css";
const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageHeader />;
      <div className="homepage-main-content">
        <h3 className="homepage-titles">Top Headlines</h3>
        <CurrentSlideAction />
      </div>
    </div>
  );
};

export default Homepage;
