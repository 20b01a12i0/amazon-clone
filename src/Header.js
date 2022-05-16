import React from 'react';
import "./Header.css"
import  {Link} from 'react-router-dom';
import logo from './amazonLogo.png';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// import {MapContainer} from 'react-leaflet';
const Header = () => {
  const[{basket,user}]=useStateValue();
  // console.log(user);
  const login=()=>{
    if(user){
      auth.signOut();
    }
  }
    return (
        <div>
          <nav className='header'>
        <Link to='/'>
           <img className="header_logo" src={logo} />
        </Link>
        <div className="header_search">
             <input type="text" className="header_searchInput" />
             <i class="search icon" ></i>
        </div>
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                    <span className="header_optionLineOne">
                      Hello 
                    </span>
                    <span className="header_optionLineTwo"> {user?"Sign Out":"Sign in"}
                       
                         
                    </span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                    <span className="header_optionLineOne">
                      Returns
                    </span>
                    <span className="header_optionLineTwo">
                      & Orders
                         
                    </span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                    <span className="header_optionLineOne">
                      Your
                    </span>
                    <span className="header_optionLineTwo">
                       Prime
                         
                    </span>
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                   <div className="header_optionBasket">
                   <i class="cart plus icon"></i>
                      <span className="header_optionLineTwo header_basketCount">{basket.length}</span>  
                   </div>
                </Link>
            </div>
        </nav>
        </div>
    );
};

export default Header;