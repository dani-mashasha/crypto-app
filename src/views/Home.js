import { useContext } from "react";
import { Link } from "react-router-dom";
import CryptoTable from "../components/CryptoTable/CryptoTable.js";
import NewsGrid from "../components/NewsGrid/NewsGrid.js";
import { CryptoContext } from "../contexts/CryptoContext.js";

function Home() {
  const { coins, news } = useContext(CryptoContext);
  return (
    <div className="home">
      <div className="headline">
        <h1>CryptoApp</h1>
        <h2>Every thing you need to know about cryptocurrancy</h2>
      </div>
      <div>
        <h2>Top 5 cryptocurrencys</h2>
        <CryptoTable coins={coins.slice(0, 5)} />

        <Link to="/top-coins" style={{ textDecoration: "none" }}>
          <h3>View top 50 cryptocurrencys</h3>
        </Link>
      </div>
      <div>
        <h2>latest crypto news</h2>
        <NewsGrid news={news.slice(0, 4)} />
        <Link to="/news" style={{ textDecoration: "none" }}>
          <h3>Read more news...</h3>
        </Link>
      </div>
    </div>
  );
}

export default Home;
