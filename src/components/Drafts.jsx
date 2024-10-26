import { fetchLeagueDrafts } from "../constants/sleeperApi";

const Drafts = () => {
  fetchLeagueDrafts();
  return <div>Drafts</div>;
};

export default Drafts;
