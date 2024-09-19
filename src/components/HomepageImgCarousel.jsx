import "../App.css";
const HomepageImgCarousel = () => {
  return (
    <div className="homepage-main-content">
      <h3 className="homepage-titles">Top Headlines</h3>
      <div className="slideshow-carousel">
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Headline Image 1"
            className="headlines-image"
            style={{ width: "100%" }}
          />
          <div className="text">Caption Text</div>
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1723894960978-3f1e1cead774?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Headline Image 2"
            className="headlines-image"
            style={{ width: "100%" }}
          />
          <div className="text">Caption Two</div>
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1723925089116-52652d744fc2?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Headline Image 3"
            className="headlines-image"
            style={{ width: "100%" }}
          />
          <div className="text">Caption Three</div>
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1723925089116-52652d744fc2?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Headline Image 3"
            className="headlines-image"
            style={{ width: "100%" }}
          />
          <div className="text">Caption Four</div>
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1723925089116-52652d744fc2?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Headline Image 3"
            className="headlines-image"
            style={{ width: "100%" }}
          />
          <div className="text">Caption Five</div>
        </div>
        <button className="carousel-btn" id="prev-btn" onclick="plusSlides(-1)">
          &#10094;
        </button>
        <button className="carousel-btn" id="next-btn" onclick="plusSlides(1)">
          &#10095;
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
        <span className="dot" onclick="currentSlide(4)"></span>
        <span className="dot" onclick="currentSlide(5)"></span>
      </div>
    </div>
  );
};

export default HomepageImgCarousel;
