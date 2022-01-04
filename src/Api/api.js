import axios from "axios";

// export const getCoins = async () => {
//     return await fetch(`https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins`, {
//         method: "GET",
//         headers: {
//           "Content-Type" : "application/json",
//           "x-access-token": process.env.REACT_APP_APIKEY ,
//           "Access-Control-Allow-Origin": "*"
//         }
//     }).then((response) => {
//         return response.json();
//     }).catch((error)=> console.log(error))
//   };

  const newsOptions = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {q: 'crypto',count: '20', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': 'd9983cab12msh7ac9aff98ad59fdp177683jsn8fe91effd1c4'
    }
  };

  const coinsOptions = {
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins`,
    headers: {
      "Content-Type" : "application/json",
      "x-access-token": process.env.REACT_APP_APIKEY ,
      "Access-Control-Allow-Origin": "*"
    }
  };



  export const getCoins = async () => {
    return await axios.request(coinsOptions)
  };

export const getNews = async () => {
  return await axios.request(newsOptions)
};






// const getCoins = async () => {
//     fetch(`https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins`, {
//       method: "GET",
//       headers: {
//         "Content-Type" : "application/json",
//         "x-access-token": process.env.REACT_APP_APIKEY ,
//         "Access-Control-Allow-Origin": "*"
//       }
//     }).then((response) => {
//       if(response.ok){
//         response.json().then((json)=> {
//           console.log(json.data.coins[0])
//           setCoins(json.data.coins)})
//           console.log(process.env
//             )
//       }
//     }).catch((error)=> console.log(error))
//   }

