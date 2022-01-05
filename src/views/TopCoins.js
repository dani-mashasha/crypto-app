import { useContext, useEffect } from 'react';
import CryptoTable from '../components/CryptoTable/CryptoTable.js'
import Loader from '../components/Loader/Loader.js';
import { CryptoContext } from "../contexts/CryptoContext.js";



function TopCoins() {
  const { coins } = useContext(CryptoContext);

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  
  return (

    <div className="top-coins">
      <div style={{textAlign: "center"}}><h1>Top 50 Crypto Coins In The World </h1></div>

      {coins.length > 0?
       <CryptoTable coins = {coins}/>
      : <Loader/>
      }
      
    </div>
    
  );
}

export default TopCoins;
