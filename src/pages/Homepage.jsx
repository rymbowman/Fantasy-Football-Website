import HomepageHeader from "../components/homepageHeader/HomepageHeader";
import CurrentSlideAction from "../components/imageCarousel/CurrentSlideAction";
import "../styles/Homepage.css";
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
