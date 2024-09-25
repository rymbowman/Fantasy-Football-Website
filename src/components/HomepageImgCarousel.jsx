import "../App.css";
import slidesData from "../constants/data/slidesData";
const HomepageImgCarousel = ({ slideIndex }) => {
  return (
    <div className="slideshowCarousel">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className="slide"
          style={{ display: index + 1 === slideIndex ? "block" : "none" }}
        >
          <img src={slide.src} alt="" className="headlineImg" />
          <div className="text">{slide.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default HomepageImgCarousel;
