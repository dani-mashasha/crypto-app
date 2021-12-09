import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import CryptoTable from './components/CryptoTable/CryptoTable.js'
import Footer from './components/Footer/Footer.js'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader.js';

const theme = createTheme({
    palette: {
      primary: {
        light: '#455a64',
        main: '#263238',
        dark: '#000',
        contrastText: '#fff',
      },
      secondary: {
        light: '##ffcc80',
        main: '##ffa726',
        dark: '##ff6d00',
        contrastText: '#000',
      },
    },
  });



function App() {

  const [coins, setCoins] = useState([])
  // ${process.env.REACT_APP_PROXY}${process.env.REACT_APP_BASEURL}
useEffect(() => {
   fetch(`https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins`, {
    method: "GET",
    headers: {
      "Content-Type" : "application/json",
      "x-access-token": process.env.REACT_APP_APIKEY ,
      "Access-Control-Allow-Origin": "*"
    }
  }).then((response) => {
    if(response.ok){
      response.json().then((json)=> {
        console.log(json.data.coins[0])
        setCoins(json.data.coins)})
        console.log(process.env
          )
    }
  }).catch((error)=> console.log(error))

}, [])



  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      {console.log(process.env.REACT_APP_APIKEY)}
      <Navbar />
      {coins.length > 0?
       <CryptoTable coins = {coins}/>
      : <Loader/>
      }
      
      <Footer />
    </div>
    
    </ThemeProvider>
  );
}

export default App;
