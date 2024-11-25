import { useState, useEffect, useCallback } from "react";
import "../../constants/data/punishmentsData";
import PropTypes from "prop-types";
import "../punishments/Punishment.css";

const SlideshowImages = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  const currentSlide = useCallback(
    (n) => {
      setFadeClass("");
      setTimeout(() => {
        let newSlideIndex = currentSlideIndex + n;
        if (newSlideIndex >= images.length) {
          newSlideIndex = 0;
        }
        if (newSlideIndex < 0) {
          newSlideIndex = images.length - 1;
        }
        setCurrentSlideIndex(newSlideIndex);
        setFadeClass("fade-in"); // Add fade-in class after slide change
      }, 500);
    },
    [currentSlideIndex, images.length]
  );

  useEffect(() => {
    const slideInterval = setInterval(() => {
      currentSlide(1);
    }, 7000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <div className="slideshow-images-container">
      <img
        className={`carousel-img ${fadeClass}`}
        src={images[currentSlideIndex]}
        alt={images.imgAlt}
      />
    </div>
  );
};

SlideshowImages.propTypes = {
  images: PropTypes.array,
};
export default SlideshowImages;
