
import Home from './PageViews/Home'
import Contact from './PageViews/Contact';
import Projects from './PageViews/Projects';

import './MainContent.css'

const MainContent = ({ activeItem }) => {
    switch (activeItem) {
      case 'Home':
        return <div className="mainContent"><Home /></div>;
      case 'Projects':
        return <div className="mainContent"><Projects /></div>;
      case 'Contact':
        return <div className="mainContent"><Contact /></div>;
      default:
        return null;
    }
  };
  
  export default MainContent;