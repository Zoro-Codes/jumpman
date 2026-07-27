//  import React, {useEffect, useState} from 'react';
//  import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
//  import './App.css'; 

//  import myLogoImage from './assets/nav-logo.png'; 
//  import myShoeImage from './assets/shoe.png';
//  import nikeLogo from './assets/nike.png'
//  import pumaLogo from './assets/puma.png'
//  import reebokLogo from './assets/reebok.png'
//  import nbLogo from './assets/new-balance.png'
//  import filaLogo from './assets/fila.png'
//  import adidasLogo from './assets/adidas.jpg'
//  import asicsLogo from './assets/asics.jpg'
//  import ppShoe from './assets/pp-shoe.png'
//  import menImg from './assets/c1.png'
//  import womenImg from './assets/c2.png'
//  import kidsImg from './assets/c3.png'
//  import bsShoe from './assets/bs.png'

//  const HeroSection = () => {
//    return (
//      <div className="hero-wrapper">
//        <div className="bg-watermark">JORDAN</div>

//        <svg className="bg-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
//          <path d="M -10,30 Q 50,10 110,40" stroke="rgba(255, 0, 0, 0.15)" fill="none" strokeWidth="0.1" />
//          <path d="M -10,80 Q 50,100 110,70" stroke="rgba(255, 0, 0, 0.1)" fill="none" strokeWidth="0.1" />
//        </svg>

//        <nav className="hero-nav">ś
//          <div className="nav-logo">
//            <img src={myLogoImage} alt="Jordan Logo" className="brand-logo-img" />
//            <span>JORDAN</span>
//          </div>
//          <ul className="nav-links">
//            <li className="active">HOME</li>
//            <li>MEN</li>
//            <li>WOMEN</li>
//            <li>KIDS</li>
//            <li>SALE</li>
//          </ul>
//          <div className="nav-actions">
//            <Search size={18} color="white" className="nav-icon" />
//            <ShoppingCart size={18} color="white" className="nav-icon" />
//            <div className="user-avatar">
//              <User size={14} color="white" />
//            </div>
//          </div>
//        </nav>

//        <div className="hero-typography">
        
//          <div className="jump-wrapper">
//            <h1 className="jump-text">Jump</h1>
//            <span className="basketball-text">Basketball Shoe</span>
//          </div>

//          <div className="man-wrapper">
//            <span className="year-text">2021 PF</span>
//            <h1 className="man-text">man</h1>
//          </div>

//        </div>

//        <img 
//          src={myShoeImage} 
//          alt="Jordan Shoe" 
//          className="hero-main-shoe" 
//        />

//        <div className="hero-colors">
//          <p className="color-label">CHOOSE COLOR :</p>
//          <div className="color-thumbnails">
//            <div className="color-thumb purple-tint">
//               <img src={myShoeImage} alt="Purple variant" />
//            </div>
//            <div className="color-thumb green-tint">
//              <img src={myShoeImage} alt="Green variant" />
//            </div>
//            <div className="color-thumb red-tint active-thumb">
//              <img src={myShoeImage} alt="Red variant" />
//            </div>
//          </div>
//        </div>

//        <div className="hero-buttons">
//          <button className="btn-add">ADD TO CART</button>
//          <button className="btn-buy">BUY NOW</button>
//        </div>

//        <div className="hero-info-box">
//          <div className="info-header">
//            <span className="info-price">134$</span>
//            <div className="info-title-container">
//              <h3 className="info-title">JORDAN<br/>JUMPMAN 2021 PF</h3>
//              <span className="new-badge">NEW</span>
//            </div>
//          </div>
//          <div className="info-details">
//            <h4>INSPIRATION</h4>
//            <p>
//              Flight, reimagined. The Jordan Jumpman 2021 PF features a 
//              responsive Zoom Air cushioning system in the forefoot 
//              and curved Flightwire cables for a secure fit.
//            </p>
//          </div>
//        </div>

//        <div className="hero-pagination">
//          <span className="dot active"></span>
//          <span className="dot"></span>
//          <span className="dot"></span>
//          <span className="dot"></span>
//          <span className="dot"></span>
//        </div>
//      </div>
//    );
//  };

//  const Brands = () => {
//    return(
//      <section className="brands-section">
//        <h2 className="brands-title">Brands</h2>

//        <div className="brands-slider">
//          <div className="brands-logo-track">
//            <img src={nikeLogo} alt="NIke" className="brand-logo" />
//            <img src={pumaLogo} alt="Puma" className="brand-logo" />
//            <img src={reebokLogo} alt="Reebok" className="brand-logo" />
//            <img src={nbLogo} alt="New Balance" className="brand-logo scale-up" />
//            <img src={filaLogo} alt="Fila" className="brand-logo scale-up" />
//            <img src={adidasLogo} alt="Adidas" className="brand-logo scale-up" />
//            <img src={asicsLogo} alt="Asics" className="brand-logo scale-up" />
//          </div>

//          <div className="brands-logo-track">
//            <img src={nikeLogo} alt="NIke" className="brand-logo" />
//            <img src={pumaLogo} alt="Puma" className="brand-logo" />
//            <img src={reebokLogo} alt="Reebok" className="brand-logo" />
//            <img src={nbLogo} alt="New Balance" className="brand-logo scale-up" />
//            <img src={filaLogo} alt="Fila" className="brand-logo scale-up" />
//            <img src={adidasLogo} alt="Adidas" className="brand-logo scale-up" />
//            <img src={asicsLogo} alt="Asics" className="brand-logo scale-up" />
//          </div>
//        </div>
//      </section>
//    );
//  };

//  const PopularProducts = () => {
//    const products = [
//      {title: "Running canvas shoes", price: "Rs. 2999.00"},
//      {title: "Running casual shoes", price: "Rs. 2499.00"},
//      {title: "Casual nike shoes", price: "Rs. 2859.00"},
//      {title: "Premium sport shoes", price: "Rs. 3499.00"},
//      {title: "Urban street sneakers", price: "Rs. 3299.00"},
//      {title: "Classic retro trainers", price: "Rs. 2199.00"},
//    ];

//    return(
//      <section className="popular-section">
//        <div className="popular-content">
//          <div className="trending-badge">
//            <span className="red-line"></span>
//            <span className="trending-text">Our Trending Shoes</span>
//          </div>
//          <h2 className="popular-title">Most Popular<br />Products</h2>
//          <p className="popular-desc">
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente corporis impedit quod.
//          </p>
//          <button className="explore-btn">Explore</button>
//        </div>
      
//        <div className="popular-slider">
//          <div className="popular-track">
//            {products.map((item,index) => (
//              <div className="product-card" key={`track1-${index}`}>
//                  <div className="product-img-wrapper">
//                    <img src={ppShoe} alt={item.title} className="product-img" />
//                  </div>
//                  <div className="product-details">
//                    <h4 className="product-name">{item.title}</h4>
//                    <div className="product-price-row">
//                      <span className="product-price">{item.price}</span>
//                      <button className="product-arrow-btn">
//                        <ChevronRight size={16} color="white"/>
//                      </button>
//                    </div>
//                  </div>
//              </div>
//            ))}
//          </div>
//        </div>

//        <div className="popular-pagination">
//          <span className="p-dot active"></span>
//          <span className="p-dot"></span>
//          <span className="p-dot"></span>
//        </div>
//      </section>
//    );
//  };

//  const Categories = () => {
//    return(
//      <section className="categories-section">
//        <div className="categories-title">Categories</div>

//        <div className="categories-grid">
//          <div className="category-card">
//            <img src={menImg} alt="Men Category" className="category-img cover-img" />
//            <div className="category-label">
//              <span>Men</span>
//              <ArrowRight size={18} className="arrow-icon"/>
//            </div>
//          </div>

//          <div className="category-card">
//            <img src={womenImg} alt="Women Category" className="category-img cover-img" />
//            <div className="category-label">
//              <span>Women</span>
//              <ArrowRight size={18} className="arrow-icon"/>
//            </div>
//          </div>

//          <div className="category-card kids-bg">
//            <img src={kidsImg} alt="Kids Category" className="category-img contain-img" />
//            <div className="category-label">
//              <span>Kids</span>
//              <ArrowRight size={18} className="arrow-icon"/>
//            </div>
//          </div>

//        </div>
//      </section>
//    );
//  };

//  const BestSelling = () => {
//    const [activeFilter, setActiveFilter] = useState('Man');

//    const filters = ['Man', 'Women', 'Boy', 'Girl'];

//    const products = [
//      {id: 1, name:"Formal canvas shoe for man", price: "22988.00", oldPrice: "24999.00", isNew: true},
//      {id: 2, name:"Sneakers shoe for man", price: "32999.00", oldPrice: "34999.00", isNew: true},
//      {id: 3, name:"Slick Sneakers shoe", price: "22988.00", oldPrice: "24999.00", isNew: true},
//      {id: 4, name:"Slick running shoes", price: "22988.00", oldPrice: "24999.00", isNew: true},
//      {id: 5, name:"Formal canvas shoe for man", price: "32999.00", oldPrice: "34999.00", isNew: true},
//      {id: 6, name:"Formal slick shoe for man", price: "32999.00", oldPrice: "34999.00", isNew: true},
//    ];

//    return(
//      <section className="bs-section">
//        <div className="section-header">
//          <span className="dash-line"></span>
//          <h2 className="title">Best Selling</h2>
//          <span className="dash-line"></span>
//        </div>

//        <div className="filter-container">
//          {filters.map((filter) => (
//            <button 
//              key={filter} 
//              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
//              onClick={() => setActiveFilter(filter)}
//            >
//              {filter}
//            </button>
//          ))}
//        </div>

//        <div className="bs-grid">
//          {products.map((product) => (
//            <div className="bs-card" key={product.id}>
//              {product.isNew && <div className="badge-new">NEW</div>}
            
//              <div className="bs-img-wrapper">
//                <img src={bsShoe} alt={product.name} className="bs-img" />
//              </div>

//              <div className="bs-details">
//                <h4 className="bs-name">{product.name}</h4>

//                <div className="bs-price-row">
//                  <div className="price-group">
//                    <span className="current-price">{product.price}</span>
//                    <span className="old-price">{product.oldPrice}</span>
//                  </div>

//                  <button className="bs-btn">
//                    <ArrowUpRight size={16} color="white"/>
//                  </button>
//                </div>
//              </div>
//            </div>
//          ))}
//        </div>
//      </section>
//    );
//  };

//  const PromoBanner = () => {
//    return(
//      <section className="promo-section">
//        <div className="promo-container">
//          <div className="promo-left">
//            <img src="https:res.cloudinary.com/ni0rf0la/image/upload/v1784526905/ChatGPT_Image_Jul_20_2026_11_24_14_AM_ydoln7.png" alt="Fashion Model" className="promo-model-img" />
//          </div>

//          <div className="promo-right">
//            <div className="promo-content">
//              <span className="limited-text">LIMITED STOCK</span>
//              <h2 className="promo-title">
//                35% off only this friday<br />
//                and get special gift
//              </h2>
//              <button className="promo-btn">
//                Grab it now <ArrowRight size={16}/>
//              </button>
//            </div>
          
//            <div className="promo-shoe-wrapper">
//              <img src="https:res.cloudinary.com/ni0rf0la/image/upload/v1784526904/ChatGPT_Image_Jul_20__2026__11_22_38_AM-removebg-preview_oekimv.png" alt="Shoe" className="promo-shoe-img"/>
//            </div>
//          </div>
//        </div>
//      </section>
//    );
//  };

//  const Testimonials = () => {
//    const testimonials = [
//      {
//        id: 1,
//        name: "Meythil Odex",
//        rating: 5,
//        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perferendis accusamus aperiam neque repellat.",
//        image: "https:res.cloudinary.com/ni0rf0la/image/upload/v1784529883/michael-dam-mEZ3PoFGs_k-unsplash-removebg-preview_ob7yj7.png"
//      },
//      {
//        id: 2,
//        name: "Vince Veras",
//        rating: 5,
//        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perferendis accusamus aperiam neque repellat.",
//        image: "https:res.cloudinary.com/ni0rf0la/image/upload/v1784529882/vince-veras-AJIqZDAUD7A-unsplash-removebg-preview_yecs5y.png"
//      },
//      {
//        id: 3,
//        name: "Jack Nakos",
//        rating: 5,
//        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perferendis accusamus aperiam neque repellat.",
//        image: "https:res.cloudinary.com/ni0rf0la/image/upload/v1784529883/jake-nackos-IF9TK5Uy-KI-unsplash-removebg-preview_fe4wnr.png"
//      },
//      {
//        id: 4,
//        name: "Micheal Dam",
//        rating: 5,
//        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perferendis accusamus aperiam neque repellat.",
//        image: "https:res.cloudinary.com/ni0rf0la/image/upload/v1784529882/christopher-campbell-rDEOVtE7vOs-unsplash-removebg-preview_hnuwon.png"
//      }
//    ];

//    const [currentIndex, setCurrentIndex] = useState(0);
//    const [cardsPerview, setCardsPerview] = useState(2);

//    useEffect(() => {
//      const handleResize = () => {
//        setCardsPerview(window.innerWidth > 768 ? 2 : 1);
//      };

//      handleResize();
//      window.addEventListener('resize', handleResize);
//      return () => window.removeEventListener('resize', handleResize);
//    }, []);

//    const maxIndex = testimonials.length - cardsPerview;

//    useEffect(() => {
//      const interval = setInterval(() => {
//        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
//      }, 4000);

//      return () => clearInterval(interval);
//    }, [maxIndex]);

//    return(
//      <section className="testimonials-section">
//        <div className="section-header">
//          <span className="dash-line"></span>
//          <h2 className="title">Client Testimonial</h2>
//          <span className="dash-line"></span>
//        </div>
      
//        <div className="test-viewport">
//          <div className="test-track" style={{'--slide-index': currentIndex}}>
//            {testimonials.map((item) => (
//              <div className="test-card" key={item.id}>
//                <div className="test-img-wrapper">
//                  <img src={item.image} alt={item.name} className="test-img" />
//                </div>

//                <div className="test-content">
//                  <h4 className="test-name">{item.name}</h4>
//                  <div className="test-stars">
//                    {[...Array(item.rating)].map((_, i) =>( 
//                      <Star key={i} size={14} fill="#f5b301" color="#f5b301"/>
//                    ))}
//                  </div>
//                  <p className="test-text">{item.text}</p>
//                </div>
//              </div>
//            ))}
//          </div>
//        </div>

//        <div className="tm-pagination">
//          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//            <span 
//              key={index} 
//              className={`dot ${currentIndex === index ? 'active' : ''}`}
//              onClick={() => setCurrentIndex(index)}
//            ></span>
//          ))}
//        </div>
//      </section>
//    );
//  };

//  const Footer = () => {
//    return(
//      <footer className="footer-section">
//        <div className="footer-container">
//          <div className="footer-brand">
//            <div className="brand-logo">
//              <img src={myLogoImage} alt="Jordan Logo" className="logo-img" />
//              <h3>JORDAN</h3>
//            </div>
//            <p className="footer-desc">
//              Lorem ipsum dolor sit amet consectetur adipisicing elit.
//            </p>
//          </div>

//          <div className="footer-links">
//            <h4>SHOP</h4>
//            <ul>
//              <li><a href="#">All Collections</a></li>
//              <li><a href="#">Winter Editions</a></li>
//              <li><a href="#">Discount</a></li>
//            </ul>
//          </div>

//          <div className="footer-links">
//            <h4>COMPANY</h4>
//            <ul>
//              <li><a href="#">About Us</a></li>
//              <li><a href="#">Contact</a></li>
//              <li><a href="#">Affiliate</a></li>
//            </ul>
//          </div>

//          <div className="footer-links">
//            <h4>SUPPORT</h4>
//            <ul>
//              <li><a href="#">FAQs</a></li>
//              <li><a href="#">Cookies Policy</a></li>
//              <li><a href="#">Terms Of Use</a></li>
//            </ul>
//          </div>
      
//          <div className="footer-payment">
//            <h4>PAYMENT METHODS</h4>

//            <div className="payment-icons">
//              <img src="https:upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="pay-icon" />
//              <img src="https:upload.wikimedia.org/wikipedia/commons/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg" alt="Visa" className="pay-icon" />
//              <img src="https:upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="pay-icon" />
//            </div>
//          </div>
//        </div>

//        <div className="footer-bottom">
//          <p>Copyright &copy; 2024 Design. All right reserved.</p>
//        </div>
//      </footer>
//    );
//  };


//  function App() {
//    return (
//      <div className="app-container">
//        <HeroSection />
//        <Brands />
//        <PopularProducts />
//        <Categories />
//        <BestSelling />
//        <PromoBanner />
//        <Testimonials />
//        <Footer />
//      </div>
//    );
//  }

//  export default App;

 import React from "react";
 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 import './App.css';

 import Home from './Home';
 import MenShop from './MenShop';

 function App(){
   return(
     <Router>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/men" element={<MenShop/>}/>
       </Routes>
     </Router>
   );
 }

 export default App;

