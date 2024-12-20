import "../memberItems/MemberItems.css";
import memberData from "../../constants/data/memberData";
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
          <div
            className="member-card"
            key={member.id}
            onClick={() => openMemberModal(member)}
          >
            <img
              className="member-img"
              src={member.img}
              alt={`pic of ${member.name}`}
            />
            <h2 className="card-name">{member.name}</h2>
          </div>
        );
      })}
      <MemberModal member={selectedMember} onClose={closeMemberModal} />
    </>
  );
};

export default MemberCard;
