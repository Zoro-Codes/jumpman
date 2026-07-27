import React from "react";
import { NavLink } from 'react-router-dom';
import myLogoImage from './assets/nav-logo.png';
import { Search, ShoppingCart, User } from 'lucide-react';
import './App.css'; 

const Navbar = ({ 
  cartCount, 
  toggleCart, 
  toggleUserMenu, 
  searchQuery, 
  setSearchQuery, 
  isSearchOpen, 
  setIsSearchOpen 
}) => {
    return(
        <nav className="hero-nav">
            <div className="nav-logo">
                <img src={myLogoImage} alt="Jordan Logo" className="brand-logo-img" />
                <span>JORDAN</span>
            </div>
            
            <ul className="nav-links">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/men">MEN</NavLink></li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>SALE</li>
            </ul>
            
            <div className="nav-actions">
                <div className="search-container">
                    {isSearchOpen && (
                        <input 
                            type="text" 
                            placeholder="Search sneakers..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="navbar-search-input"
                            autoFocus
                        />
                    )}
                    <Search 
                        size={30} 
                        className="nav-icon" 
                        onClick={() => setIsSearchOpen(!isSearchOpen)} 
                    />
                </div>

                <User 
                    size={30} 
                    className="nav-icon" 
                    onClick={toggleUserMenu} 
                />

                <div className="cart-wrapper" onClick={toggleCart}>
                    <ShoppingCart size={30} className="nav-icon" />
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </div>
            </div>
       </nav>
    );
};

export default Navbar;