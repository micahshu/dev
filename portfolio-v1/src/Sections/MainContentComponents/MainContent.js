
import Home from './PageViews/Home'
import Contact from './PageViews/Contact';
import Projects from './PageViews/Projects';
const MainContent = ({ activeItem }) => {
    switch (activeItem) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };
  
  export default MainContent;