import ThemeToggle from "../../Modules/ThemeToggle";
import WelcomeQuote from "../../Modules/WelcomeQuote";
import './Footer.css'
function Footer() {

    return (
      <div className="footerSection">
       <ThemeToggle />
       <ul>
        <WelcomeQuote />
       </ul>
      </div>
    );
  }
  
  export default Footer;
  