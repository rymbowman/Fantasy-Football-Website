import punishmentsData from "../../constants/data/punishmentsData";
import PageHeader from "../pageHeaders/PageHeader";
import "../punishments/Punishment.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SlideshowImages from "./slideshowImages";

const Punishment = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="punishments-container">
      <PageHeader pageTitle={"League Punishments"} />
      {punishmentsData.map((punishment) => {
        return (
          <div
            className={`${punishment.class} punishment-content`}
            key={punishment.id}
            data-aos="fade-in"
          >
            {punishment.slideshowImages ? (
              <SlideshowImages images={punishment.slideshowImages} />
            ) : (
              <img
                src={punishment.imgSrc}
                alt={punishment.imgAlt}
                className="punishment-img"
              />
            )}

            <div className="punishment-text">
              <h3 className="punishment-title">{punishment.title}</h3>
              <p className="punishment-summary">{punishment.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Punishment;
