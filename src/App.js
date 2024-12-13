
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import DeliveryBoyProfile from './components/DeliveryBoyProfile';
import PickupAndDrop from './components/PickupAndDrop';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login state
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin}/>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login toggleLogin={toggleLogin}/>} />
          <Route path="/register" element={<Register toggleLogin={toggleLogin}/>} />
          <Route path="/profile" element={<DeliveryBoyProfile />} />
          <Route path="/pickup-drop" element={<PickupAndDrop />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;


