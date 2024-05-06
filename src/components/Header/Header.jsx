import './Header.css';
import logo from "../../assets/logo.jpg";

function Header () {
   return(
      <div className="navbar">
         <img src={logo} alt="Logo.."/>
         <ul className="tabs">
            <li><a href="." className="navbar"> Platform </a></li>
            <li><a href="." className="navbar"> Plan </a></li>
            <li><a href="." className="navbar"> Enterprises </a></li>
            <li><a href="." className="navbar"> Resources </a></li>
            <li><a href="." className="navbar"> Education </a></li>
         </ul>

         <div className="btns">
            <button>Contact us</button>
            <button>Log In</button>
            <button className="signUp">Sign Up</button>
         </div>
      </div>
   )
}

export default Header;