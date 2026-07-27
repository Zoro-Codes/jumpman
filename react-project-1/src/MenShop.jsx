import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Heart, ChevronRight, Star, ShieldCheck, RefreshCcw, Truck, X, Trash2 } from 'lucide-react';

const fallbackShoe = "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80";

const MenShop = () => {
  const [activeCategory, setActiveCategory] = useState("All Men");
  const [sortBy, setSortBy] = useState("Newest");
  const [priceRange, setPriceRange] = useState(19999);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage]= useState(1);
  const itemsPerPage=9;

  const [cart,setCart] = useState([]);
  const [wishlist,setWishlist] = useState([]);
  const [searchQuery,setSearchQuery] = useState("");
  const [isSearchOpen,setIsSearchOpen] = useState(false);
  const [isCartOpen,setIsCartOpen] = useState(false);
  const [isUserMenuOpen,setIsUserMenuOpen] = useState(false);
  const [isWishlistModalOpen,setIsWishlistModalOpen] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  },[activeCategory, sortBy, priceRange, selectedBrands])

  const heroSlides = [
    {
      id: 1,
      brand: "Men",
      title: "MEN'S",
      highlight: "COLLECTION",
      subtext: "Step up your game with the latest sneakers for men.",
      bgText: "JUMPMAN",
      img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784872352/men-hero_tc8mfl.png"
    },
    {
      id: 2,
      brand: "Nike",
      title: "NIKE",
      highlight: "EXCLUSIVES",
      subtext: "Experience the innovation of Nike running and lifestyle.",
      bgText: "NIKE",
      img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784872352/nike_uxssta.png"
    },
    {
      id: 3,
      brand: "Adidas",
      title: "ADIDAS",
      highlight: "ORIGINALS",
      subtext: "Classic styles redefined for the modern streets.",
      bgText: "ADIDAS",
      img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784872352/adidas_nznzqr.png"
    },
    {
      id: 4,
      brand: "Puma",
      title: "PUMA",
      highlight: "CREATIVES",
      subtext: "Engineered for speed. Designed for the bold.",
      bgText: "PUMA",
      img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784872352/puma_p7gpqc.png" 
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  const products = [
    { id: 1, name: "Air Jordan 1 Retro High OG", brand:"NIKE", price: "12,999", priceNum: 12999, category: "Lifestyle", added: 1, reviews: 128, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701459/Jordan_1_High_lbp057.png" },
    { id: 2, name: "Air Jordan 4 Retro", brand:"NIKE", price: "11,999", priceNum: 11999, category: "Basketball", added: 5, reviews: 98, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/jordan_4_yd30yf.png" },
    { id: 3, name: "Air Jordan 3 Retro", brand:"NIKE", price: "10,499", priceNum: 10499, category: "Lifestyle", added: 3, reviews: 76, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/Jordan_3_bfannd.png" },
    { id: 4, name: "Air Jordan 11 Retro", brand:"NIKE", price: "15,999", priceNum: 15999, category: "Basketball", added: 9, reviews: 64, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_11_vzozv2.png" },
    { id: 5, name: "Air Jordan 1 Low", brand:"NIKE", price: "8,999", priceNum: 8999, category: "Running", added: 2, reviews: 115, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/jordan_1_low_zbk3ep.png" },
    { id: 6, name: "Air Jordan 5 Retro", brand:"NIKE", price: "11,499", priceNum: 11499, category: "Basketball", added: 8, reviews: 83, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/jordan_5_yyd5y8.png" },
    { id: 7, name: "Air Jordan 6 Retro", brand:"NIKE", price: "12,499", priceNum: 12499, category: "Training", added: 4, reviews: 58, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/jordan_6_xmttzp.png" },
    { id: 8, name: "Air Jordan 12 Retro", brand:"NIKE", price: "13,499", priceNum: 13499, category: "Basketball", added: 7, reviews: 69, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_12_c0hsvw.png" },
    { id: 9, name: "Air Jordan 13 Retro", brand:"NIKE", price: "11,999", priceNum: 11999, category: "Lifestyle", added: 6, reviews: 74, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png" },
    { id: 10, name: "Adidas Uomo Own", brand:"ADIDAS", price: "12,999", priceNum: 12999, category: "Lifestyle", added: 6, reviews: 69, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875464/adidas_uomo_lkkojk.png"},
    { id: 11, name: "Adidas Terrex Skychaser", brand:"ADIDAS", price: "11,999", priceNum: 11999, category: "Basketball", added: 5, reviews: 52, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875464/adidas_Terrex_j9vw8z.png"},
    { id: 12, name: "Adidas Strutter ", brand:"ADIDAS", price: "11,999", priceNum: 11999, category: "Lifestyle", added: 8, reviews: 67, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_stutter_ova9j4.png"},
    { id: 13, name: "Adidas Supernova Ease 2", brand:"ADIDAS", price: "10,499", priceNum: 10499, category: "Basketball", added: 4, reviews: 87, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_supernova_ease_2_cjshrv.png"},
    { id: 14, name: "Adidas Stabil 16", brand:"ADIDAS", price: "15,999", priceNum: 15999, category: "Lifestyle", added: 1, reviews: 92, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_stabil_16_ljlqbe.png"},
    { id: 15, name: "Adidas Herren Galaxy 7", brand:"ADIDAS", price: "8,999", priceNum: 8999, category: "Basketball", added: 2, reviews: 121, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_herren_galaxy_7_ipz5pn.png"},
    { id: 16, name: "Adidas Laufschuh Galaxy 7", brand:"ADIDAS", price: "11,499", priceNum: 11499, category: "Running", added: 10, reviews: 77, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_laufschuh__galaxy_7_wfq9bn.png"},
    { id: 17, name: "Adidas Superstar II", brand:"ADIDAS", price: "12,499", priceNum: 12499, category: "Training", added: 6, reviews: 37, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875464/adidas_superstar_II_phmphr.png"},
    { id: 18, name: "Adidas Bounce 2.0", brand:"ADIDAS", price: "13,499", priceNum: 13499, category: "Basketball", added: 4, reviews: 48, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_bounce_2_0_fkkuqg.png"},
    { id: 19, name: "Air Jordan 13 Retro", brand:"PUMA", price: "11,999", priceNum: 11999, category: "Lifestyle", added: 2, reviews: 59, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
    { id: 20, name: "Air Jordan 13 Retro", brand:"PUMA", price: "12,999", priceNum: 12999, category: "Lifestyle", added: 9, reviews: 107, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
    { id: 21, name: "Air Jordan 13 Retro", brand:"PUMA", price: "11,999", priceNum: 11999, category: "Basketball", added: 5, reviews: 62, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
    { id: 22, name: "Air Jordan 13 Retro", brand:"PUMA", price: "10,499", priceNum: 10499, category: "Lifestyle", added: 7, reviews: 94, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
    { id: 23, name: "Air Jordan 13 Retro", brand:"PUMA", price: "15,999", priceNum: 15999, category: "Basketball", added: 3, reviews: 45, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
    { id: 24, name: "Air Jordan 13 Retro", brand:"PUMA", price: "8,999", priceNum: 8999, category: "Running", added: 11, reviews: 103, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
    { id: 25, name: "Air Jordan 13 Retro", brand:"PUMA", price: "11,499", priceNum: 11499, category: "Basketball", added: 4, reviews: 78, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
    { id: 26, name: "Air Jordan 13 Retro", brand:"PUMA", price: "12,499", priceNum: 12499, category: "Training", added: 1, reviews: 71, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
    { id: 27, name: "Air Jordan 13 Retro", brand:"PUMA", price: "13,499", priceNum: 13499, category: "Basketball", added: 8, reviews: 88, img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png"},
  ];

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, sortBy, priceRange, selectedBrands, searchQuery])
  
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
        prev.includes(brand) ? prev.filter(b => b != brand) : [...prev, brand]
    );
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if(existing) return prev.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item);
      return [...prev, {...product, qty: 1}];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });
  };
 
  let filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === "All Men" || product.category === activeCategory;
    const priceMatch = product.priceNum <= priceRange;
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && priceMatch && brandMatch && searchMatch;
  });

  filteredProducts.sort((a, b) => {
    if (sortBy === "Newest") return b.added - a.added;
    if (sortBy === "Price: Low to High") return a.priceNum - b.priceNum;
    if (sortBy === "Price: High to Low") return b.priceNum - a.priceNum;
    return 0;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDisplayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const cartTotal = cart.reduce((total, item) => total + (item.priceNum * item.qty), 0);

  return (
    <div className="mens-page">
      <div className="mens-hero">
        <Navbar 
          cartCount={cart.reduce((sum,item) => sum + item.qty , 0)}
          toggleCart={() => setIsCartOpen(true)}
          toggleUserMenu={() => setIsUserMenuOpen(!isUserMenuOpen)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />

        {isUserMenuOpen && (
          <div className="user-dropdown">
            <div className="user-info">
              <h4>My Account</h4>
              <p>Welcome back!</p>
            </div>

            <ul>
              <li>My Profile</li>
              <li>My Orders</li>
              <li onClick={() => {setIsWishlistModalOpen(true); setIsUserMenuOpen(false); }}>
                Wishlist <span className="wishlist-count">{wishlist.length}</span>
              </li>
              <li className="logout-btn">Log Out</li>
            </ul>
          </div>
        )}
        
        <div className="hero-slider-container">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className={`mens-hero-content ${index === currentSlide ? 'active-slide' : 'inactive-slide'}`}>
              <div className="mens-hero-text">
                <p className="breadcrumb">Home &gt; <span style={{color: '#fff'}}>{slide.brand}</span></p>
                <h1>{slide.title}<br/><span className="highlight-red">{slide.highlight}</span></h1>
                <p className="hero-subtext">{slide.subtext}</p>
                
                <div className="trust-badges">
                  <span><ShieldCheck size={18} /> 100% Authentic</span>
                  <span><RefreshCcw size={18} /> Easy Returns</span>
                  <span><Truck size={18} /> Fast Delivery</span>
                </div>
              </div>
              
              <div className="mens-hero-image">
                <div className="hero-bg-text">{slide.bgText}</div>
                <img src={slide.img} alt={`${slide.brand} shoe`} className="hero-shoe-actual" /> 
              </div>
            </div>
          ))}
          
          <div className="slider-navigation">
            {heroSlides.map((_, index) => (
              <span key={index} className={`dot ${index === currentSlide ? 'active-dot' : ''}`} onClick={() => setCurrentSlide(index)}></span>
            ))}
          </div>
        </div>
      </div>

      <div className="shop-layout">

        <aside className="shop-sidebar">
          
          <div className="filter-group">
            <h3>CATEGORIES</h3>
            <ul>
              {["All Men", "Lifestyle", "Running", "Basketball", "Training", "Slides & Sandals", "Accessories"].map(cat => (
                <li key={cat} className={activeCategory === cat ? "active-cat" : ""} onClick={() => setActiveCategory(cat)}>
                  {cat} {cat !== "All Men" && <ChevronRight size={16} color="#aaa" />}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="filter-main-heading">FILTERS</h3>

          <div className="filter-group">
            <h4 className="filter-subheading">SIZE</h4>
            <div className="size-grid">
              {[6,7,8,9,10,11,12,13].map(size => <button key={size} className="size-btn">{size}</button>)}
            </div>
            <span className="show-more">+ Show More</span>
          </div>

          <div className="filter-group">
            <h4 className="filter-subheading">PRICE</h4>
            <input type="range" min="1999" max="19999" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="price-slider" />
            <div className="price-labels">
              <span>₹1,999</span>
              <span>₹{Number(priceRange).toLocaleString()}</span>
            </div>
          </div>

          <div className="filter-group">
            <h4 className="filter-subheading">COLOR</h4>
            <div className="color-swatches">
              <span className="color-dot" style={{backgroundColor: '#000'}}></span>
              <span className="color-dot" style={{backgroundColor: '#fff', border: '1px solid #ddd'}}></span>
              <span className="color-dot" style={{backgroundColor: '#888'}}></span>
              <span className="color-dot" style={{backgroundColor: '#ff0000'}}></span>
              <span className="color-dot" style={{backgroundColor: '#0000ff'}}></span>
              <span className="color-dot" style={{backgroundColor: '#008000'}}></span>
              <span className="color-dot" style={{backgroundColor: '#d2b48c'}}></span>
              <span className="color-dot" style={{backgroundColor: '#ffc0cb'}}></span>
            </div>
          </div>

          <div className="filter-group">
            <h4 className="filter-subheading">BRAND</h4>
            {["NIKE","ADIDAS","PUMA"].map(brand => (
                <label className="checkbox-label">
                    <input 
                        type="checkbox" 
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                    />{brand}
                </label>
            ))}
          </div>

          <div className="filter-group">
            <h4 className="filter-subheading">RATING</h4>
            {[4, 3, 2, 1].map(stars => (
              <div className="rating-row" key={stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < stars ? "#000" : "transparent"} color="#000" />
                ))}
                <span>& above</span>
              </div>
            ))}
          </div>
        </aside>

        <main className="shop-main-content">
          <div className="shop-header-row">
            <h2>{activeCategory.toUpperCase()} ({filteredProducts.length})</h2>
            <div className="sort-container">
              <label htmlFor="sort">Sort by: </label>
              <select id="sort" className="sort-dropdown-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="Newest">Newest</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid-3x3" key={`${activeCategory}-${sortBy}-${priceRange}-${currentPage}-${selectedBrands.join()}`}>
            {currentDisplayedProducts.length > 0 ? (
              currentDisplayedProducts.map((product, index) => (
                <div className="shoe-card" key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="card-top">
                    <Heart size={20} className="heart-icon" />
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="card-info">
                    <h4 className="shoe-name">{product.name}</h4>
                    <p className="shoe-price">₹{product.price}</p>
                    <div className="shoe-rating">
                      <Star size={14} fill="#000" />
                      <Star size={14} fill="#000" />
                      <Star size={14} fill="#000" />
                      <Star size={14} fill="#000" />
                      <Star size={14} fill="#000" />
                      <span className="review-count">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products-msg">No products found for these filters.</div>
            )}
          </div>

            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        className="page-btn"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i+1}
                            className={`page-btn ${currentPage === i + 1 ? 'active-page' : ''}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="page-btn"
                        onClick={() =>setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </main>
      </div>

      <div className="mens-promo">
        <div className="promo-text">
          <p className="promo-label">NEW ARRIVALS</p>
          <h2>THE GAME NEVER STOPS</h2>
          <p>Explore the latest drops in men's collection.</p>
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
        <div className="promo-image-wrapper">
            <img src="https://res.cloudinary.com/ni0rf0la/image/upload/v1784703800/men-hero_kza1fj.png" alt="New Arrival Shoe" className="promo-shoe-img"/>
        </div>
      </div>

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
                    <p className="cart-item-price">${item.price}</p>
                    <p className="cart-item-qty">Qty : {item.qty}</p>
                  </div>
                  <Trash2 size={18} className="remove-item-icon" onClick={() => removeFromCart(item.id)}/>
                </div>
              ))
            )}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>TOTAL:</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
            <button className="checkout-btn" disabled={cart.length === 0}>PROCEED TO CHECKOUT</button>
          </div>
      </div>

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
                      <p>${item.price}</p>
                      <button onClick={() => { addToCart(item); toggleWishlist(item); }}>Move To Cart</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <Footer/>
        
    </div>  
  );
};

export default MenShop;