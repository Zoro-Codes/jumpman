import React from "react";
import menImg from './assets/c1.png';
import womenImg from './assets/c2.png';
import kidsImg from './assets/c3.png';
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css'; 

const Categories = () => {
   return(
     <section className="categories-section">
       <div className="categories-title">Categories</div>

       <div className="categories-grid">
         <div className="category-card">
           <img src={menImg} alt="Men Category" className="category-img cover-img" />
           <div className="category-label">
             <span>Men</span>
             <ArrowRight size={18} className="arrow-icon"/>
           </div>
         </div>

         <div className="category-card">
           <img src={womenImg} alt="Women Category" className="category-img cover-img" />
           <div className="category-label">
             <span>Women</span>
             <ArrowRight size={18} className="arrow-icon"/>
           </div>
         </div>

         <div className="category-card kids-bg">
           <img src={kidsImg} alt="Kids Category" className="category-img contain-img" />
           <div className="category-label">
             <span>Kids</span>
             <ArrowRight size={18} className="arrow-icon"/>
           </div>
         </div>

       </div>
     </section>
   );
 };

 export default Categories;