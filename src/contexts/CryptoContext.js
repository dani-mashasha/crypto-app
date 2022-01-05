import { createContext, useEffect, useState } from "react";
import { getCoins, getNews } from "../Api/api.js";

export const CryptoContext = createContext();

export const CryptoProvider = (props) => {
  const [coins, setCoins] = useState([]);
  const [news, setNews] = useState([]);

  async function getData() {
    try {
      const coinsResponse = await getCoins();
      const coinsData = coinsResponse.data.data;

      setCoins(coinsData.coins);

      const newsResponse = await getNews();
      const newsData = newsResponse.data;
      setNews(newsData.value);
    } catch {
      console.log("Error: cant fech data...");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const contextValus = {
    coins,
    news,
  };

  return (
    <CryptoContext.Provider value={contextValus}>
      {props.children}
    </CryptoContext.Provider>
  );
};
