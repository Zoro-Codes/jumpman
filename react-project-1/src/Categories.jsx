import React from "react";
import menImg from './assets/c1.png';
import womenImg from './assets/c2.png';
import kidsImg from './assets/c3.png';
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css'; 
import { Link } from 'react-router-dom';

const Categories = () => {
   return(
     <section className="categories-section">
       <div className="categories-title">Categories</div>

       <div className="categories-grid">
         <div className="category-card">
           <img src={menImg} alt="Men Category" className="category-img cover-img" />
           <Link 
              to="/men" 
              className="category-label" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span>Men</span>
              <ArrowRight size={18} className="arrow-icon"/>
            </Link>
          </div>

         <div className="category-card">
           <img src={womenImg} alt="Women Category" className="category-img cover-img" />
            <Link 
              to="/women" 
              className="category-label" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span>Women</span>
              <ArrowRight size={18} className="arrow-icon"/>
            </Link>
         </div>

         <div className="category-card kids-bg">
           <img src={kidsImg} alt="Kids Category" className="category-img contain-img" />
            <Link 
              to="/kid" 
              className="category-label" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span>Kids</span>
              <ArrowRight size={18} className="arrow-icon"/>
            </Link>
         </div>

       </div>
     </section>
   );
 };

 export default Categories;