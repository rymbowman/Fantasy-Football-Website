const LeagueInfo = () => {
  return (
    <>
      <div className="directory-pages">
        <a
          href="./standings-rankings.html"
          className="card-pathways"
          id="standings-rankings-card"
        >
          <div>
            <h3 className="card-heading">Standings/Rankings</h3>
          </div>
        </a>

        <a href="" className="card-pathways">
          <div>
            <h3 className="card-heading">Schedules</h3>
          </div>
        </a>

        <a href="./transactions.html" className="card-pathways">
          <div>
            <h3 className="card-heading">Transactions</h3>
          </div>
        </a>

        <a href="" className="card-pathways">
          <div>
            <h3 className="card-heading">League Leaders</h3>
          </div>
        </a>
      </div>
      <div className="league-content" id="recent-transactions"></div>
      <div className="league-content" id="trade-block"></div>
    </>
  );
};

export default LeagueInfo;
