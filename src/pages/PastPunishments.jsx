import BlogForm from "../components/blogForm/BlogForm";
import Punishment from "../components/punishments/Punishment";
import "../styles/App.css";

const PastPunishments = () => {
  return (
    <div className="history-content" id="past-punishments">
      <Punishment />
      <BlogForm />
    </div>
  );
};

export default PastPunishments;
