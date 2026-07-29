import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Plus } from "lucide-react";

const AllDeals = () => {
    const [cart,setCart] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    const [isSearchOpen,setIsSearchOpen] = useState(false);
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [isUserMenuOpen,setIsUserMenuOpen] = useState(false);
    const [isWishlistModalOpen,setIsWishlistModalOpen] = useState(false);
    // const [notification,setNotification] = useState("");

    const allDeals = [
        { id: 1, discount: "-40%", name: "Nike Air Force 1 '07", old: "150.00", new: "89.99", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/jordan_1_low_zbk3ep.png" },
        { id: 2, discount: "-35%", name: "Air Jordan 1 Retro High", old: "180.00", new: "116.99", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/Jordan_3_bfannd.png" },
        { id: 3, discount: "-30%", name: "Adidas Ultraboost 22", old: "170.00", new: "118.99", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_bounce_2_0_fkkuqg.png" },
        { id: 4, discount: "-45%", name: "Yeezy Boost 700", old: "200.00", new: "109.99", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_stutter_ova9j4.png" },
        { id: 5, discount: "-20%", name: "Air Jordan 4 Retro", old: "210.00", new: "168.00", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701416/jordan_4_yd30yf.png" },
        { id: 6, discount: "-50%", name: "Adidas Supernova", old: "140.00", new: "70.00", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784875463/adidas_supernova_ease_2_cjshrv.png" },
        { id: 7, discount: "-25%", name: "Puma RS-X", old: "120.00", new: "90.00", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_13_v8kfso.png" },
        { id: 8, discount: "-30%", name: "Air Jordan 11 Retro", old: "225.00", new: "157.50", img: "https://res.cloudinary.com/ni0rf0la/image/upload/v1784701417/Jordan_11_vzozv2.png" }
    ];

    return (
        <div className="sale-page-wrapper">
            <div className="sale-nav-container">
                <Navbar
                    cartCount={0}
                    toggleCart={() => setIsCartOpen(true)}
                    toggleUserMenu={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    toggleWishlistModal={() => setIsWishlistModalOpen(true)}
                    wishlistCount={0}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isSearchOpen={isSearchOpen}
                    setIsSearchOpen={setIsSearchOpen}
                />
            </div>

            <main style={{padding: '60px 5%', minHeight: '60vh'}}>
                <h2 style={{fontSize: '40px', fontWeight: 900, marginBottom: '40px'}}>
                    ALL <span className="highlight-red">DEALS</span>
                </h2>
            

                <div className="deals-grid">
                    {allDeals.map(deal => (
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
                                <button className="add-deal-btn"><Plus size={20} color="white" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default AllDeals;