import MemberCard from "../components/MemberCard";
import "../styles/App.css";
const Members = () => {
  return (
    <div className="main-content">
      <h2 className="members-h2 members-leading-container">Meet Our Members</h2>

      <div className="league-members-container">
        <MemberCard />
      </div>
    </div>
  );
};

export default Members;
