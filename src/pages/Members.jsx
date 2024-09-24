import MemberCard from "../components/MemberCard";

const Members = () => {
  return (
    <div className="main-content">
      <h2 className="members-h2">Meet Our Members</h2>

      <div className="league-members-container">
        <MemberCard />
        <div className="member-modal" id="Ryan-modal">
          <div className="modal-content">
            <h3 className="modal-content-header">Ryan</h3>
            <div className="modal-content-text">
              <br></br>
              <p>Best Draft Pick: CJ Stroud (2023, 4th Overall)</p>
              <br></br>
              <p>Worst Draft Pick: Trey Lance (2021, 1st Overall)</p>
              <br></br>
              <p>
                Best Trade: Acquired Ceedee Lamb and 2026 3rd from Cole for
                Michael Pittman, 2025 1st, and two 2026 2nds (August, 2023)
              </p>
              <br></br>
              <p>
                Worst Trade: Traded Stefon Diggs to Micah for Kareem Hunt
                (August, 2020)
              </p>
              <br></br>
              <p>
                Ryan, a dedicated and passionate fantasy football enthusiast,
                has been building his legacy in the competitive world of fantasy
                sports for several years. Despite a respectable all-time record
                of 36-32, he is still in pursuit of his first Flames Fantasy
                Championship. Residing in the vibrant and spirited region of
                Southern New Jersey, Ryan shares his life with his loving wife
                of over two years. Together, they embrace the thrills and
                challenges of life, supporting each other through every high and
                low.
              </p>
              <br></br>
              <p>
                A fervent supporter of the Philadelphia Eagles, Ryans devotion
                to the sport extends beyond the realm of fantasy football. His
                passion for the game is evident in every decision he makes, both
                as a fan and as a fantasy football manager. With a keen eye for
                talent and a strategic mind, Ryan has meticulously crafted a
                roster that is not only poised to win now but is also built to
                remain competitive for years to come.
              </p>
              <br></br>
              <p>
                Ryans mission is clear: to dismantle Carters team and maintain a
                stronghold over Jose, keeping him marooned on Bowman Island.
                This competitive spirit drives Ryan to constantly seek
                improvements, analyze matchups meticulously, and make bold moves
                that keep his rivals on their toes.
              </p>
              <br></br>
              <p>
                Ryans passion for humbling Carter and Jose drives a relentless
                pursuit of excellence and his unwavering commitment to achieving
                fantasy football supremacy. It is this determination that fuels
                his every move, from draft day decisions to weekly lineup
                adjustments.
              </p>
              <br></br>
            </div>
            <button className="modal-close-button" id="Ryan-close">
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
