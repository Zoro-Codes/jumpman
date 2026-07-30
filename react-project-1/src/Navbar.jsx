import React from "react";
import { NavLink } from 'react-router-dom';
import myLogoImage from './assets/nav-logo.png';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import { useShop } from './ShopContext'; // <-- Import Context
import './App.css'; 

const Navbar = () => {
    // Destructure everything you need from your global state
    const { 
        cartCount, 
        setIsCartOpen, 
        setIsUserMenuOpen, 
        searchQuery, 
        setSearchQuery, 
        isSearchOpen, 
        setIsSearchOpen,
        wishlist, 
        setIsWishlistModalOpen
    } = useShop();

    return (
        <nav className="hero-nav">
            <div className="nav-logo">
                <img src={myLogoImage} alt="Jordan Logo" className="brand-logo-img" />
                <span>JORDAN</span>
            </div>
            
            <ul className="nav-links">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/men">MEN</NavLink></li>
                <li><NavLink to="/women">WOMEN</NavLink></li>
                <li><NavLink to="/kids">KIDS</NavLink></li>
                <li><NavLink to="/sale">SALE</NavLink></li>
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
                        size={40} 
                        className="nav-icon" 
                        color="white"
                        onClick={() => setIsSearchOpen(!isSearchOpen)} 
                    />
                </div>

                <User 
                    size={40} 
                    className="nav-icon" 
                    color="white"
                    onClick={() => setIsUserMenuOpen(prev => !prev)} 
                />

                <div className="cart-wrapper" onClick={() => setIsWishlistModalOpen(true)} style={{cursor: 'pointer'}}>
                    <Heart size={40} className="nav-icon" color="white" />
                    {wishlist.length > 0 && <span className="cart-badge">{wishlist.length}</span>}
                </div>

                <div className="cart-wrapper" onClick={() => setIsCartOpen(true)}>
                    <ShoppingCart size={40} className="nav-icon" color="white"/>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </div>
            </div>
       </nav>
    );
};

export default Navbar;