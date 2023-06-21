import "../Css/Navbar.css";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Navbar = () => {
   const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

   return (
      <div className="nav">
         <div className="page-logo-wrapper">
            <Logo />
         </div>

         <ul className="nav-list">
            {navItems.map((item) => {
               return (
                  <li
                     key={item}
                     className="nav-item"
                  >
                     {item}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Navbar;
