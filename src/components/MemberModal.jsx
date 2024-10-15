import "../styles/App.css";
import PropTypes from "prop-types";

const MemberModal = ({ member, onClose }) => {
  if (!member) return null;
  return (
    <div key={member.id} className="member-modal" id={member.id}>
      <div className="modal-content">
        <h3 className="modal-content-header">{member.name}</h3>
        <h4>{member.nickName}</h4>
        <div className="modal-content-text">{member.bestPick}</div>
        <div className="modal-content-text">{member.worstPick}</div>
        <div className="modal-content-text">{member.bestTrade}</div>
        <div className="modal-content-text">{member.worstTrade}</div>
        <div className="modal-content-text">{member.bio}</div>
        <div className="modal-content-text">{member.mission}</div>
        <div className="modal-content-text">{member.allTimeRecord}</div>
        <button
          className="modal-close-button"
          id={"Ryan-close"}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
MemberModal.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    nickName: PropTypes.string,
    bestPick: PropTypes.string,
    worstPick: PropTypes.string,
    bestTrade: PropTypes.string,
    worstTrade: PropTypes.string,
    bio: PropTypes.string,
    mission: PropTypes.string,
    allTimeRecord: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};
export default MemberModal;
