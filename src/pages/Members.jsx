import MemberCard from "../components/MemberCard";

const Members = () => {
  return (
    <div className="main-content">
      <h2 className="members-h2">Meet Our Members</h2>

      <div className="league-members-container">
        <MemberCard />
      </div>
    </div>
  );
};

export default Members;
