import "../App.css";
import memberData from "../constants/data/memberData";
import MemberModal from "./MemberModal";
import { useState } from "react";
const MemberCard = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      {memberData.map((member) => {
        return (
          <div className="memberCard" key={member.id}>
            <img
              className="memberImg"
              src={member.img}
              alt={`pic of ${member.name}`}
            />
            <h2>{member.name}</h2>
            <p className="card-title">{member.nickName}</p>
            <button
              className="button-members"
              id="Ryan-open"
              onClick={() => openMemberModal(member)}
            >
              Bio
            </button>
          </div>
        );
      })}
      <MemberModal member={selectedMember} onClose={closeMemberModal} />
    </>
  );
};

export default MemberCard;
