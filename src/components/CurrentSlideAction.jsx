import { useState, useEffect } from "react";
import slidesData from "../constants/data/slidesData";
const CurrentSlideAction = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slidesData.length) {
      newIndex = 1;
    }
    if (newIndex < 1) {
      newIndex = slidesData.length;
      setSlideIndex(newIndex);
    }
  };
  // Thumbnail image controls
  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
      <div className="slideshow-container">
        {/* Your slides */}
        <div className="slide">Slide 1</div>
        <div className="slide">Slide 2</div>
        <div className="slide">Slide 3</div>

        {/* Controls */}
        <button onClick={() => plusSlides(-1)}>Prev</button>
        <button onClick={() => plusSlides(1)}>Next</button>

        {/* Dots */}
        <div className="dot-container">
          {slidesData.map((_, i) => {
            <span key={i} className={`dot`}></span>;
          })}
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </>
  );
};

export default CurrentSlideAction;
