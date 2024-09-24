const MemberCard = ({ name, nickname }) => {
  return (
    <div
      className="memberCard"
      data-aos="flip-right"
      data-aos-delay="300"
      data-aos-duration="1200"
    >
      <img src="" alt={`pic of ${name}`} className="memberImg" />
      <div className="container">
        <h2>{name}</h2>
        <p className="card-title">{nickname}</p>
        <button className="button-members" id="Ryan-open">
          Bio
        </button>
      </div>
    </div>
  );
};

export default MemberCard;
