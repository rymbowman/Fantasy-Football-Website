import "../App.css";

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

export default MemberModal;
