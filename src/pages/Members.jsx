import MemberCard from "../components/MemberCard";
import "../styles/MembersPage.css";
const Members = () => {
  return (
    <div className="members-main-content">
      <div className="members-leading-container">
        <h1 className="members-h1">Meet Our Members</h1>
      </div>

      <div className="league-members-container">
        <MemberCard />
      </div>
    </div>
  );
};

export default Members;
