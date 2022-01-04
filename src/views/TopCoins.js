import CryptoTable from '../components/CryptoTable/CryptoTable.js'
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader.js';
import {getCoins} from '../Api/api.js'



function TopCoins() {
  const [coins, setCoins] = useState([])

  // ${process.env.REACT_APP_PROXY}${process.env.REACT_APP_BASEURL}
  const manageCoins = async () =>{
    try{
        const response = await getCoins();
        const {data} = response;
        setCoins(data.data.coins)
        
    }
    catch{
        console.log("Data Error")
    }
   };

    useEffect(() => {
        manageCoins()
    }, [])



  return (

    <div className="top-coins">
      

      {coins.length > 0?
       <CryptoTable coins = {coins}/>
      : <Loader/>
      }
      
    </div>
    
  );
}

export default TopCoins;
