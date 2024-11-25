import MemberCard from "../components/memberItems/MemberCard";
import "../components/memberItems/MemberItems.css";
import PageHeader from "../components/pageHeaders/PageHeader";
import "../styles/MembersPage.css";

const Members = () => {
  return (
    <div className="members-main-content">
      <PageHeader category={"members"} pageTitle={"Our Members"} />
      <div className="league-members-container">
        <MemberCard />
      </div>
    </div>
  );
};

export default Members;
