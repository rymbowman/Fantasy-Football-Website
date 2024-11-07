import punishmentsData from "../../constants/data/punishmentsData";
import PageHeader from "../pageHeaders/PageHeader";
import "../punishments/Punishment.css";

const Punishment = () => {
  return (
    <div className="punishments-container">
      <PageHeader category={"punishments"} pageTitle={"League Punishments"} />
      {punishmentsData.map((punishment) => {
        return (
          <div className={punishment.class} key={punishment.id}>
            <img src={punishment.imgSrc} alt={punishment.imgAlt} />
            <h3>{punishment.title}</h3>
            <p>{punishment.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Punishment;
