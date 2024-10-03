import slidesData from "../constants/data/slidesData";
import "../App.css";
import CurrentSlideAction from "./CurrentSlideAction";
const HomepageImgCarousel = ({ slideIndex }) => {
  return (
    <div className="slideshow-carousel">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className="slide"
          style={{ display: index + 1 === slideIndex ? "block" : "none" }}
        >
          <img src={slide.src} alt="" className="headline-img" />
          <div className="text">{slide.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default HomepageImgCarousel;
