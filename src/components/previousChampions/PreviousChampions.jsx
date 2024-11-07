import PageHeader from "../pageHeaders/PageHeader";
import "../previousChampions/PreviousChampions.css";

const PreviousChampions = () => {
  return (
    <div className="previous-champions-container">
      <PageHeader category={"champs"} pageTitle={"League Champions"} />
    </div>
  );
};

export default PreviousChampions;
