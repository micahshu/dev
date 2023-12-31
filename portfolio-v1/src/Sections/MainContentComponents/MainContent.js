
import Home from './PageViews/Home'
import Contact from './PageViews/Contact';
import Projects from './PageViews/Projects';
import { useTheme } from '../../Context/ThemeContext';

import './MainContent.css'

const MainContent = ({ activeItem }) => {

  
    const { isDarkMode } = useTheme();

    switch (activeItem) {
      case 'Home':
        return <div className={`mainContent ${isDarkMode ? 'dark' : 'light'}`}><Home /></div>;
      case 'Projects':
        return <div className={`mainContent ${isDarkMode ? 'dark' : 'light'}`}><Projects /></div>;
      case 'Contact':
        return <div className={`mainContent ${isDarkMode ? 'dark' : 'light'}`}><Contact /></div>;
      default:
        return null;
    }
  };
  
  export default MainContent;