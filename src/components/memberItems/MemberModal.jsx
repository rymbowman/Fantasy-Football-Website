import "../memberItems/MemberItems.css";
import PropTypes from "prop-types";

const MemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div key={member.id} className="member-modal" id={member.id}>
      <div className="modal-content">
        <div className="modal-div">
          <h2 className="modal-content-header">{member.name}</h2>
        </div>
        <div className="modal-div">
          <h3 className="modal-header">All Time Record</h3>
          <p className="modal-content-text">{member.allTimeRecord}</p>
        </div>

        <div className="modal-div">
          <h3 className="modal-header">Best Draft Pick</h3>
          <p className="modal-content-text">{member.bestPick}</p>
        </div>
        <div className="modal-div">
          <h3 className="modal-header">Worst Draft Pick</h3>
          <p className="modal-content-text">{member.worstPick}</p>
        </div>

        <div className="modal-div">
          <h3 className="modal-header">Best Trade</h3>
          <div className="modal-list">
            <p className="modal-li-p">{member.bestTrade[2]}</p>
            <li className="modal-li">Acquired: {member.bestTrade[0]}</li>
            <li className="modal-li">For: {member.bestTrade[1]}</li>
          </div>

          <div className="modal-div">
            <h3 className="modal-header">Worst Trade</h3>
            <div className="modal-list">
              <p className="modal-li-p">{member.worstTrade[2]}</p>
              <li className="modal-li">Traded away: {member.worstTrade[0]}</li>
              <li className="modal-li">Acquired: {member.worstTrade[1]}</li>
            </div>
          </div>
        </div>

        <div className="modal-div">
          <h3 className="modal-header">Bio</h3>
          <div className="modal-section">
            <p className="modal-p">{member.bio[0]}</p>
            <p className="modal-p">{member.bio[1]}</p>
          </div>
        </div>
        <div className="modal-div">
          <h3 className="modal-header">Mission</h3>
          <div className="modal-section">
            <p className="modal-p">{member.mission[0]}</p>
            <p className="modal-p">{member.mission[1]}</p>
          </div>
        </div>
      </div>
      <button
        className="modal-close-button"
        id={"Ryan-close"}
        onClick={onClose}
      >
        Close
      </button>
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
    bestTrade: PropTypes.array,
    worstTrade: PropTypes.array,
    bio: PropTypes.array,
    mission: PropTypes.array,
    allTimeRecord: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};
export default MemberModal;
