import './Navbar.css'


    const NavBar = ({ activeItem, handleItemClick }) => {

    return (
      <div className='NavContainer'>
        <ul>
        <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
          Home
        </li>
        <li className={activeItem === 'Projects' ? 'active' : ''} onClick={() => handleItemClick('Projects')}>
          Projects
        </li>
        <li className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>
          Contact
        </li>
       </ul>
      </div>
    );
  }
  
  export default NavBar;