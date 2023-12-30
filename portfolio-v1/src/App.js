
import React, { useState } from 'react';
import './App.css';
import Navbar from './Sections/NavBarComponents/Navbar'
import MainContent from './Sections/MainContentComponents/MainContent'
import Footer from './Sections/FooterComponents/Footer'
import { useTheme } from './Context/ThemeContext';

const App = () => {

  const { isDarkMode } = useTheme();

  // Handles Menu Change. Passes props from Navbar to Main content

  const [activeItem, setActiveItem] = useState('Home');
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar activeItem={activeItem} handleItemClick={handleItemClick} />
      <MainContent activeItem={activeItem} />
      <Footer />
    </div>
  );
}

export default App;
