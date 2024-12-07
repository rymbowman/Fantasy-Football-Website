import { useNavigate } from "react-router-dom";
import "../styles/ErrorPage.css";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <h1 className="error-title">Oops!</h1>
      <p className="error-message">{message || "Something went wrong."}</p>
      <button className="error-button" onClick={handleGoHome}>
        Go Home
      </button>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};
export default Error;
