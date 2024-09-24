import "../App.css";
import memberData from "../constants/data/memberData";
const MemberModals = () => {
  return (
    <div>
      {memberData.map((member) => {
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
            <button className="modal-close-button" id={"Ryan-close"}>
              Close
            </button>
          </div>
        </div>;
      })}
    </div>
  );
};

export default MemberModals;