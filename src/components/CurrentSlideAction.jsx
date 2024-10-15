import { useState, useEffect } from "react";
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
  useEffect(() => {
    const intervalId = setInterval(() => {
      plusSlides(1); // Automatically go to the next slide
    }, 15000); // 15000 milliseconds = 15 seconds

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <HomepageImgCarousel
        slideIndex={slideIndex}
        plusSlides={plusSlides}
        currentSlide={currentSlide}
      />

      {/* Dots */}
      <div className="dots-container">
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
