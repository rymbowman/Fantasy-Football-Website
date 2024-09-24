import "../App.css";
import memberData from "../constants/data/memberData";
const MemberCard = () => {
  return (
    <>
      {memberData.map((member) => {
        return (
          <div className="container" key={member.id}>
            <img src={member.img} alt={`pic of ${member.name}`} />
            <h2>{member.name}</h2>
            <p className="card-title">{member.nickName}</p>
            <button className="button-members" id="Ryan-open">
              Bio
            </button>
          </div>
        );
      })}
    </>
  );
};

export default MemberCard;
