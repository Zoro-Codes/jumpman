// src/GlobalModals.jsx
import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from './ShopContext';
import './index.css';

const GlobalModals = () => {
  const {
    cart,
    wishlist,
    isCartOpen, setIsCartOpen,
    isUserMenuOpen, setIsUserMenuOpen,
    isWishlistModalOpen, setIsWishlistModalOpen,
    notification,
    handleAddToCart,
    removeFromCart,
    updateQuantity,
    handleToggleWishlist,
    cartTotal
  } = useShop();

  return (
    <>
      {/* 1. USER MENU */}
      {isUserMenuOpen && (
        <div className="user-dropdown">
          <div className="user-dropdown-header">
            <img 
              src="https://res.cloudinary.com/ni0rf0la/image/upload/v1784529882/christopher-campbell-rDEOVtE7vOs-unsplash-removebg-preview_hnuwon.png" 
              alt="Profile Avatar"
              className='user-avatar' 
            />
            <div className="user-info">
              <h4>User Name</h4>
              <p>Welcome back!</p>
            </div>
          </div>
          
          <ul className='user-menu-list'>
            <li><Link to="/profile" onClick={() => setIsUserMenuOpen(false)}>My Profile</Link></li>
            <li><Link to="/authpage" onClick={() => setIsUserMenuOpen(false)}>Sign In / Sign Up</Link></li>
            <li 
              className="logout-btn"
              onClick={() => {
                alert("You have been logged out!")
                setIsUserMenuOpen(false);
              }}
            >
              Log Out
            </li>
          </ul>
        </div>
      )}

      {/* 2. CART DRAWER */}
      <div className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
          <div className="cart-header">
            <h2>YOUR CART ({cart.reduce((sum, item) => sum + item.qty, 0)})</h2>
            <X cursor="pointer" onClick={() => setIsCartOpen(false)}/>
          </div>

          <div className="cart-items-container">
            {cart.length === 0 ? (
              <p className="empty-cart-msg">Your cart is currently empty.</p>
            ) : (
              cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">₹{item.price}</p>
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <Trash2 size={18} className="remove-item-icon" onClick={() => removeFromCart(item.id)}/>
                </div>
              ))
            )}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>TOTAL:</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <button className="checkout-btn" disabled={cart.length === 0}>PROCEED TO CHECKOUT</button>
          </div>
      </div>

      {/* 3. WISHLIST MODAL */}
      {isWishlistModalOpen && (
        <div className="wishlist-modal-overlay">
          <div className="wishlist-modal">
            <div className="modal-header">
              <h2>MY WISHLIST</h2>
              <X cursor="pointer" onClick={() => setIsWishlistModalOpen(false)}/>
            </div>
            <div className="wishlist-grid">
              {wishlist.length === 0 ? (
                <p style={{padding: '20px'}}>No items in your wishlist yet.</p>
              ) : (
                wishlist.map(item => (
                  <div className="wishlist-item" key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <div className="wishlist-details">
                      <h4>{item.name}</h4>
                      <p>₹{item.price}</p>
                      <div className="wishlist-btn-group">
                        <button onClick={() => { handleAddToCart(item); handleToggleWishlist(item); }}>Move To Cart</button>
                        <button className='wishlist-remove-btn' onClick={() => handleToggleWishlist(item)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. NOTIFICATION TOAST */}
      {notification && (
        <div className="notification-toast">
          {notification}
        </div>
      )}
    </>
  );
};

export default GlobalModals;