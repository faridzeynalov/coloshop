import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.scss";
import { useState } from "react";

const Header = () => {

  const [showMenu, setShowMenu] = useState('');


  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            COLO
            <span>SHOP</span>
          </Link>
        </div>
        <div className="headerRight">
          <ul className={showMenu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-product">Add product</Link>
            </li>
            <button onClick={()=> setShowMenu('')}>
              <i className="fa fa-times"></i>
            </button>
          </ul>
          <div>
            <a href="">
              <i className="fa fa-shopping-cart"></i>
            </a>
            <button onClick={()=> setShowMenu('active')}>
               <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
