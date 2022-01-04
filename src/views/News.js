import { useEffect, useState } from 'react';
import {getNews} from '../Api/api.js'
import NewsGrid from '../components/NewGrid/NewsGrid.js';


function News() {
  const [news, setNews] = useState([]);
  
  
  const manageNews = async () =>{
    try{
    const response = await getNews();
    const {data} = response;
    console.log(data.value)
    setNews(data.value)

    // .then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
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
        <NewsGrid news = {news}/>
    </div>
    
  );
}

export default News;
