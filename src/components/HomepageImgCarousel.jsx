import slidesData from "../constants/data/slidesData";

import "../App.css";
const HomepageImgCarousel = ({ slideIndex, plusSlides }) => {
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
      {/* Controls */}
      <button
        id="prev-btn"
        className="carousel-btn"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </button>
      <button
        id="next-btn"
        className="carousel-btn"
        onClick={() => plusSlides(1)}
      >
        &#10095;
      </button>
    </div>
  );
};

export default HomepageImgCarousel;
