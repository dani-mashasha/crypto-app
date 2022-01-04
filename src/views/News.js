import { useEffect, useState } from 'react';
import {getNews} from '../Api/api.js'
import Loader from '../components/Loader/Loader.js';
import NewsGrid from '../components/NewGrid/NewsGrid.js';


function News() {
  const [news, setNews] = useState([]);
  
  
  const manageNews = async () =>{
    try{
    const response = await getNews();
    const {data} = response;
    console.log(data.value)
    setNews(data.value)
    
  }
  catch{
    console.log("Data Error")
  }
};

useEffect(() => {
    manageNews();
}, []);

  return (

    <div className="news-grid">
      {news.length > 0 ? 
        <NewsGrid news = {news}/>
        : <Loader/>}
    </div>
    
  );
}

export default News;
