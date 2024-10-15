import punishmentsData from "../constants/data/punishmentsData";
import "../styles/App.css";

const Punishment = () => {
  return (
    <>
      {punishmentsData.map((punishment) => {
        return (
          <div className={punishment.class} key={punishment.id}>
            <img src={punishment.imgSrc} alt={punishment.imgAlt} />
            <h3>{punishment.title}</h3>
            <p>{punishment.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Punishment;
