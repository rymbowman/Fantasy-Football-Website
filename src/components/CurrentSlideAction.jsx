import { useState } from "react";
import slidesData from "../constants/data/slidesData";
import HomepageImgCarousel from "./HomepageImgCarousel";
import "../App.css";
const CurrentSlideAction = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slidesData.length) {
      newIndex = 1;
    }
    if (newIndex < 1) {
      newIndex = slidesData.length;
    }
    setSlideIndex(newIndex);
  };
  // Thumbnail image controls
  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
      <HomepageImgCarousel slideIndex={slideIndex} />

      {/* Controls */}
      <button
        onClick={() => plusSlides(-1)}
        id="prev-btn"
        className="carousel-btn"
      >
        Prev
      </button>
      <button
        onClick={() => plusSlides(1)}
        id="next-btn"
        className="carousel-btn"
      >
        Next
      </button>

      {/* Dots */}
      <div className="dot">
        {slidesData.map((_, i) => (
          <span
            key={i}
            className={`dot ${i + 1 === slideIndex ? "active" : ""}`}
            onClick={() => currentSlide(i + 1)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default CurrentSlideAction;
