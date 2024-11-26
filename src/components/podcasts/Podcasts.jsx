import PageHeader from "../pageHeaders/PageHeader";
import "../podcasts/Podcasts.css";
const Podcasts = () => {
  return (
    <div className="podcasts-container">
      <PageHeader category={"podcasts"} pageTitle={"Podcasts"} />

      <ul className="podcasts-list">
        <li className="podcast-li">
          <a
            href="https://podcasts.apple.com/us/podcast/fantasy-footballers-dynasty-fantasy-football-podcast/id1679069587"
            className="podcast-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://s26212.pcdn.co/wp-content/uploads/2023/03/TFFB_Dynasty_Podcast_Logo_2000px.jpg"
              alt="picture of the Fantasy Footballers Dynasty Podcast logo"
              className="podcast-img"
            />
            Fantasy Footballers Dynasty - Fantasy Football Podcast
          </a>
        </li>
        <li className="podcast-li">
          <a
            href="https://podcasts.apple.com/us/podcast/fantasypros-dynasty-football-podcast/id1551610006"
            className="podcast-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/ea/49/35/ea493513-e328-47b4-4ce8-2026a6c829c6/mza_8957196113127349005.jpg/1200x1200bf-60.jpg"
              alt="picture of FantasyPros Dynasty Football Podcast logo"
              className="podcast-img"
            />
            FantasyPros Dynasty Football Podcast
          </a>
        </li>
        <li className="podcast-li">
          <a
            href="https://podcasts.apple.com/us/podcast/fantasy-football-today/id261735167"
            className="podcast-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://sportshub.cbsistatic.com/i/r/2021/09/08/fdc2d910-313d-4770-bb6e-5f9e3a461ed4/thumbnail/400x400/7f694248903adcae23cdad054b5a438a/fft-pod-logo-2021.png"
              alt="picture of the Fantasy Football Today podcast logo"
              className="podcast-img"
            />
            Fantasy Football Today
          </a>
        </li>
        <li className="podcast-li">
          <a
            href="https://podcasts.apple.com/us/podcast/fantasy-feast-nfl-fantasy-football-podcast/id898834773"
            className="podcast-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://megaphone.imgix.net/podcasts/b5e52768-fc81-11eb-88a9-bf45f5cb500f/image/FFMegaphone.png?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress"
              alt="picture of the Fantasy Feast Podcast logo"
              className="podcast-img"
            />
            Fantasy Feast: NFL Fantasy Football Podcast
          </a>
        </li>
        <li className="podcast-li">
          <a
            href="https://podcasts.apple.com/us/podcast/dynasty-nerds-podcast-dynasty-fantasy-football/id844386407"
            className="podcast-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.scdn.co/image/ab6765630000ba8ab466f9924d3753d64dc4d606"
              alt="picture of the Dynasty Nerds Podcast logo"
              className="podcast-img"
            />
            Dynasty Nerds Podcast | Dynasty Fantasy Football
          </a>
        </li>
        <li className="podcast-li">
          <a
            href="https://podcasts.apple.com/us/podcast/the-late-round-fantasy-football-podcast/id1224965828"
            className="podcast-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/86/f5/3c/86f53cec-36d0-d290-9f57-0ae12ce4ea3a/mza_15032897881905261765.png/300x300bb.webp"
              alt="picture of The Late Round Fantasy Football Podcast logo"
              className="podcast-img"
            />
            The Late Round Fantasy Football Podcast
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Podcasts;
