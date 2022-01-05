import { useContext, useEffect } from 'react';
import Loader from '../components/Loader/Loader.js';
import NewsGrid from '../components/NewsGrid/NewsGrid.js';
import { CryptoContext } from "../contexts/CryptoContext.js";



function News() {
  const { news } = useContext(CryptoContext);

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="news-grid">
    <div style={{textAlign: "center"}}><h1>Biggest CryptoNews All Over The World </h1></div>

      {news.length > 0 ? 
        <NewsGrid news = {news}/>
        : <Loader/>}

    </div>
    
  );
}

export default News;
