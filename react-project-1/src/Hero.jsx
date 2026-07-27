import React from "react";
import myShoeImage from './assets/shoe.png';
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css'; 

const HeroSection = () => {
   return (
      <div className="hero-content">
       
       <div className="hero-typography">
        
         <div className="jump-wrapper">
           <h1 className="jump-text">Jump</h1>
           <span className="basketball-text">Basketball Shoe</span>
         </div>

         <div className="man-wrapper">
           <span className="year-text">2021 PF</span>
           <h1 className="man-text">man</h1>
         </div>

       </div>

       <img 
         src={myShoeImage} 
         alt="Jordan Shoe" 
         className="hero-main-shoe" 
       />

       <div className="hero-colors">
         <p className="color-label">CHOOSE COLOR :</p>
         <div className="color-thumbnails">
          <div className="color-thumb purple-tint">
              <img src={myShoeImage} alt="Purple variant" />
           </div>
           <div className="color-thumb green-tint">
             <img src={myShoeImage} alt="Green variant" />
           </div>
           <div className="color-thumb red-tint active-thumb">
             <img src={myShoeImage} alt="Red variant" />
           </div>
         </div>
       </div>

       <div className="hero-buttons">
         <button className="btn-add">ADD TO CART</button>
         <button className="btn-buy">BUY NOW</button>
       </div>

       <div className="hero-info-box">
         <div className="info-header">
           <span className="info-price">134$</span>
           <div className="info-title-container">
             <h3 className="info-title">JORDAN<br/>JUMPMAN 2021 PF</h3>
             <span className="new-badge">NEW</span>
           </div>
         </div>
         <div className="info-details">
            <h4>INSPIRATION</h4>
           <p>
             Flight, reimagined. The Jordan Jumpman 2021 PF features a 
             responsive Zoom Air cushioning system in the forefoot 
             and curved Flightwire cables for a secure fit.
           </p>
         </div>
       </div>

       <div className="hero-pagination">
         <span className="dot active"></span>
         <span className="dot"></span>
         <span className="dot"></span>
         <span className="dot"></span>
         <span className="dot"></span>
       </div>
     </div>
   );
};

export default HeroSection;