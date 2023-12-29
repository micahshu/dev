
import React, { useState } from 'react';
import './App.css';
import Navbar from './Sections/NavBarComponents/Navbar'
import MainContent from './Sections/MainContentComponents/MainContent'
import Footer from './Sections/FooterComponents/Footer'

const App = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="App">
      <Navbar activeItem={activeItem} handleItemClick={handleItemClick} />
      <MainContent activeItem={activeItem} />
      <Footer />
    </div>
  );
}

export default App;