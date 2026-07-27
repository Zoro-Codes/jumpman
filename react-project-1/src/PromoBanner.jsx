import React from "react";
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css'; 

const PromoBanner = () => {
   return(
     <section className="promo-section">
       <div className="promo-container">
         <div className="promo-left">
           <img src="https:res.cloudinary.com/ni0rf0la/image/upload/v1784526905/ChatGPT_Image_Jul_20_2026_11_24_14_AM_ydoln7.png" alt="Fashion Model" className="promo-model-img" />
         </div>

         <div className="promo-right">
           <div className="promo-content">
             <span className="limited-text">LIMITED STOCK</span>
             <h2 className="promo-title">
               35% off only this friday<br />
               and get special gift
             </h2>
             <button className="promo-btn">
               Grab it now <ArrowRight size={16}/>
             </button>
           </div>
          
           <div className="promo-shoe-wrapper">
             <img src="https:res.cloudinary.com/ni0rf0la/image/upload/v1784526904/ChatGPT_Image_Jul_20__2026__11_22_38_AM-removebg-preview_oekimv.png" alt="Shoe" className="promo-shoe-img"/>
           </div>
         </div>
       </div>
     </section>
   );
 };

 export default PromoBanner;