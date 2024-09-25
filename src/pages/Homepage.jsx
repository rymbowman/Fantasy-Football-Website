import CurrentSlideAction from "../components/CurrentSlideAction";
import HomepageHeader from "../components/HomepageHeader";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageHeader />;
      <CurrentSlideAction />
    </div>
  );
};

export default Homepage;
