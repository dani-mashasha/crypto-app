

const getCoins = async () => {
    return await fetch(`https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins`, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json",
          "x-access-token": process.env.REACT_APP_APIKEY ,
          "Access-Control-Allow-Origin": "*"
        }
    }).then((response) => {
        return response.json();
    }).catch((error)=> console.log(error))
  }

export default getCoins




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

