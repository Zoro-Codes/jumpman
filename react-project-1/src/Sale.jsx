import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowRight, Plus, Zap } from "lucide-react";

const Sale = () => {
    const [cart,setCart] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    const [isSearchOpen,setIsSearchOpen] = useState(false);
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [isUserMenuOpen,setIsUserMenuOpen] = useState(false);
    const [isWishlistModalOpen,setIsWishlistModalOpen] = useState(false);
    const [notification,setNotification] = useState("");

    const [currentSlide, setCurrentSlide] = useState(0);

    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 36,
        seconds: 55
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return {...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return {...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return {...prev, hours : prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return {...prev, days : prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const saleSlides = [
        {
            id: 1,
            title: "Summer Sale",
            discount: "50%",
            shoeName: "Air Jordan XXXVI",
            oldPrice: "220.00",
            newPrice: "110.00",
            img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1785222364/air_jordan_xxxvi_xmq5cj.png"
        },

        {
            id: 2,
            title: "Weekend Deals",
            discount: "30%",
            shoeName: "Adidas Ultraboost",
            oldPrice: "190.00",
            newPrice: "133.00",
            img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1785222803/adidas_ultra_boost_so3inl.png"
        },

        {
            id: 3,
            title: "Flash Drop",
            discount: "40%",
            shoeName: "PUMA X F1 Fade",
            oldPrice: "180.00",
            newPrice: "108.00",
            img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1785222364/puma_x1__f1_fade_i4vkla.png"
        }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % saleSlides.length);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, [saleSlides.length]);

    const formatTime = (num) => num.toString().padStart(2, '0');

    return (
        <div className="sale-page-wrapper">
            <div className="sale-nav-container">
                <Navbar
                    cartCount={cart.reduce((sum,item) => sum + item.qty , 0)}
                    toggleCart={() => setIsCartOpen(true)}
                    toggleUserMenu={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    toggleWishlistModal={() => setIsWishlistModalOpen(true)}
                    wishlistCount={wishlist.length}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isSearchOpen={isSearchOpen}
                    setIsSearchOpen={setIsSearchOpen}
                />
            </div>

            <div className="sale-hero-container">
                {saleSlides.map((slide, index) => (
                    <div key={slide.id} className={`sale-hero-slide ${index === currentSlide ? 'active-slide' : 'inactive-slide'}`}>
                        <div className="sale-hero-left">
                            <div className="limited-offer-badge">
                                <Zap size={15} fill="white"/> LIMITED TIME OFFER
                            </div>
                            <h1>{slide.title}<br />Up To <span className="highlight-red">{slide.discount} OFF</span></h1>
                            <p className="sale-subtext">Grab your favourite sneakers at unbeatable prices.<br/>Hurry! Offer ends soon.</p>

                            <div className="countdown-timer">
                                <div className="time-box"><span>{formatTime(timeLeft.days)}</span><small>Days</small></div> <span className="colon">:</span>
                                <div className="time-box"><span>{formatTime(timeLeft.hours)}</span><small>Hours</small></div> <span className="colon">:</span>
                                <div className="time-box"><span>{formatTime(timeLeft.minutes)}</span><small>Minutes</small></div> <span className="colon">:</span>
                                <div className="time-box"><span>{formatTime(timeLeft.seconds)}</span><small>Seconds</small></div>
                            </div>
                            <button className="sale-hero-btn">SHOP NOW</button>
                        </div>

                        <div className="sale-hero-right">

                             <div className="sale-hero-img-wrapper">
                                <div className="red-glow-effect"></div>
                                <img src={slide.img} alt={slide.shoeName} className="sale-hero-shoe"/>
                            </div>

                            <div className="sale-hero-prooduct">
                                <p className="up-to-text">UP TO</p>
                                <h2 className="massive-discount">{slide.discount}</h2>
                                <p className="off-text">OFF</p>
                                <h4 className="featured-shoe-name">{slide.shoeName}</h4>
                                <div className="featured-pricing">
                                    <div className="old-price">${slide.oldPrice}</div>
                                    <div className="new-price">${slide.newPrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="silder-navigation" style={{bottom: '20px'}}>
                {saleSlides.map((_, index) => (
                    <span key={index} className={`dot ${index === currentSlide ? 'active-dot' : ''}`} onClick={() => setCurrentSlide(index)}></span>
                ))}
            </div>
        </div>
    );
};

export default Sale;