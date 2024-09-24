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

        <div
          className="card"
          data-aos="flip-right"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/cole.jpg"
            alt="pic of Cole"
            className="member-img"
          />
          <div className="container">
            <h2>Cole</h2>
            <p className="card-title">Impulsive Trader</p>
            <button className="button-members" id="Cole-open">
              Bio
            </button>
          </div>
        </div>
        <div className="member-modal" id="Cole-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Cole</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Cole-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="flip-right"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/miah.jpg"
            alt="pic of Miah"
            className="member-img"
          />
          <div className="container">
            <h2>Miah</h2>
            <p className="card-title">Father of Jose and Jesse</p>
            <p>
              <button className="button-members" id="Miah-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Miah-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Miah</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Miah-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/carter.jpg"
            alt="pic of Carter"
            className="member-img"
          />
          <div className="container">
            <h2>Carter</h2>
            <p className="card-title">Post-Prime</p>
            <p>
              <button className="button-members" id="Carter-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Carter-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Carter</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Carter-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/jacob.jpg"
            alt="pic of Jacob"
            className="member-img"
          />
          <div className="container">
            <h2>Jacob</h2>
            <p className="card-title">Had a Good First Year</p>
            <p>
              <button className="button-members" id="Jacob-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Jacob-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Jacob</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Jacob-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/kyle.jpg"
            alt="pic of Kyle"
            className="member-img"
          />
          <div className="container">
            <h2>Kyle</h2>
            <p className="card-title">Jacobs Guardian</p>
            <p>
              <button className="button-members" id="Kyle-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Kyle-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Kyle</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Kyle-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="flip-right"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/jose.jpg"
            alt="pic of Jose"
            className="member-img"
          />
          <div className="container">
            <h2>Jose</h2>
            <p className="card-title">Miahs Farm System</p>
            <p>
              <button className="button-members" id="Jose-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Jose-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Jose</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Jose-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="flip-right"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/micah.jpg"
            alt="pic of Micah"
            className="member-img"
          />
          <div className="container">
            <h2>Micah</h2>
            <p className="card-title">League Punishment Dodger</p>
            <p>
              <button className="button-members" id="Micah-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Micah-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Micah</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Micah-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="flip-right"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/jesse.jpg"
            alt="pic of Jesse"
            className="member-img"
          />
          <div className="container">
            <h2>Jesse</h2>
            <p className="card-title">Fantasy Success of Browns Franchise</p>
            <p>
              <button className="button-members" id="Jesse-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Jesse-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Jesse</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Jesse-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/josh.jpg"
            alt="pic of Josh"
            className="member-img"
          />
          <div className="container">
            <h2>Josh</h2>
            <p className="card-title">Conservative Trader</p>
            <p>
              <button className="button-members" id="Josh-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Josh-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Josh</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Josh-close">
              Close
            </button>
          </div>
        </div>

        <div
          className="card"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <img
            src="./Images/simon.jpg"
            alt="pic of Simon"
            className="member-img"
          />
          <div className="container">
            <h2>Simon</h2>
            <p className="card-title">The Dangler</p>
            <p>
              <button className="button-members" id="Simon-open">
                Bio
              </button>
            </p>
          </div>
        </div>
        <div className="member-modal" id="Simon-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Simon</h3>
            <div className="modal-content-text">
              <p>This is the content of this member</p>
            </div>
            <button className="modal-close-button" id="Simon-close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
