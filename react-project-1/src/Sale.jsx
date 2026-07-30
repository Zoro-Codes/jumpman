import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PromoBanner from "./PromoBanner"
import Footer from "./Footer";
import { ArrowRight, Plus, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "./ShopContext"; // <-- Import context

const Sale = () => {
    // Pull the add to cart function from your global state
    const { handleAddToCart } = useShop(); 

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

    const topDeals = [
        { id: 1, discount: "-40%", name: "Nike Air Force 1 '07", old: "150.00", new: "89.99", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/jordan_1_low_zbk3ep.png" },
        { id: 2, discount: "-35%", name: "Air Jordan 1 Retro High", old: "180.00", new: "116.99", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/Jordan_3_bfannd.png" },
        { id: 3, discount: "-30%", name: "Adidas Ultraboost 22", old: "170.00", new: "118.99", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_bounce_2_0_fkkuqg.png" },
        { id: 4, discount: "-45%", name: "Yeezy Boost 700", old: "200.00", new: "109.99", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_stutter_ova9j4.png" }
    ];

    const formatTime = (num) => num.toString().padStart(2, '0');

    return (
        <div className="sale-page-wrapper">
            <div className="sale-nav-container">
                {/* Navbar now handles all its logic internally via Context */}
                <Navbar />
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

            <div className="top-deals-section">
                <div className="top-deals-header">
                    <h2>Top Deals Of The Sale</h2>
                    <Link to="/all-deals" className="view-all-link">View All Deals <ArrowRight size={16} /></Link>
                </div>

                <div className="deals-grid">
                    {topDeals.map(deal => (
                        <div className="deal-card" key={deal.id}>
                            <span className="discount-badge">{deal.discount}</span>
                            <div className="deal-img-container">
                                <img src={deal.img} alt={deal.name} />
                            </div>
                            <div className="deal-info">
                                <h4>{deal.name}</h4>
                                <div className="deal-pricing">
                                    <span className="deal-old">${deal.old}</span>
                                    <span className="deal-new">${deal.new}</span>
                                </div>
                                <button 
                                  className="add-deal-btn"
                                  onClick={() => handleAddToCart({
                                      ...deal,
                                      price: deal.new,
                                      priceNum: parseFloat(deal.new)
                                  })}
                                >
                                  <Plus size={20} color="white" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <PromoBanner/>
            <Footer/>
        </div>
    );
};

export default Sale;