import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import CryptoTable from './components/CryptoTable/CryptoTable.js'
import Footer from './components/Footer/Footer.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader.js';
import getCoins from './Api/coins.js'


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
  
const manageCoins = async () =>{
  const response = await getCoins();
  const {data} = response;
  setCoins(data.coins)
}


useEffect(() => {
  manageCoins()
}, [])



  return (
    <ThemeProvider theme={theme}>

    <div className="App">
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
