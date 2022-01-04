import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import TopCoins from './views/TopCoins.js';
import News from './views/News.js';
import Home from './views/Home.js';


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

  // <Link className={classes.link} to="/products-grid">


  return (
    <ThemeProvider theme={theme}>
      <Router>

      <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/top-coins" element={<TopCoins/>}/>
          <Route exact path="/news" element={<News/>}/>
        </Routes>

      <Footer />

      </Router>
    
    </ThemeProvider>
  );
}

export default App;
