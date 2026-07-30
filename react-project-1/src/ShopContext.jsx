import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if(existing) return prev.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item);
      return [...prev, {...product, qty: 1}];
    });
    showNotification(`${product.name} added to cart!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const updateQuantity = (id, amount) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === id) {
            return { ...item, qty: item.qty + amount };
          }
          return item;
        })
        .filter(item => item.qty > 0);
    });
  };

  const handleToggleWishlist = (product) => {
    const isAdding = !wishlist.find(item => item.id === product.id);
    setWishlist(prev => {
      if(!isAdding) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });

    if(isAdding) {
      showNotification(`${product.name} added to wishlist!`);
    } else {
      showNotification(`${product.name} removed from wishlist.`);
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.priceNum * item.qty), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Expose everything needed by your components
  const value = {
    cart, 
    wishlist, 
    searchQuery, setSearchQuery,
    isSearchOpen, setIsSearchOpen,
    isCartOpen, setIsCartOpen,
    isUserMenuOpen, setIsUserMenuOpen,
    isWishlistModalOpen, setIsWishlistModalOpen,
    notification, 
    showNotification,
    handleAddToCart,
    removeFromCart,
    updateQuantity,
    handleToggleWishlist,
    cartTotal,
    cartCount
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};