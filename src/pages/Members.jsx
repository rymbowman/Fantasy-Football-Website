import MemberCard from "../components/MemberCard";

const Members = () => {
  return (
    <div className="main-content">
      <h2 className="members-h2">Meet Our Members</h2>

      <div className="league-members-container">
        <MemberCard name={"Ryan"} nickname={"Fantasy Genious"} />
        <MemberCard name={"Cole"} nickname={"Impulsive Trader"} />
        <MemberCard name={"Miah"} nickname={"Father of Jose and Jesse"} />
        <MemberCard name={"Carter"} nickname={"Post-Prime"} />
        <MemberCard name={"Jacob"} nickname={"Had a good first year"} />
        <MemberCard name={"Kyle"} nickname={"Jacobs Guardian"} />
        <MemberCard name={"Jose"} nickname={"Miahs Farm System"} />
        <MemberCard name={"Micah"} nickname={"League Punishment Dodger"} />
        <MemberCard
          name={"Jesse"}
          nickname={"Fantasy Success of the Browns Franchise"}
        />
        <MemberCard name={"Simon"} nickname={"The Dangler"} />
        <MemberCard name={"Josh"} nickname={"Conservative Trader"} />
      </div>
    </div>
  );
};

export default Members;
