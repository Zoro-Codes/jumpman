import React from "react";
import ppShoe from './assets/pp-shoe.png';
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css'; 

const PopularProducts = () => {
   const products = [
     {title: "Running canvas shoes", price: "Rs. 2999.00"},
     {title: "Running casual shoes", price: "Rs. 2499.00"},
     {title: "Casual nike shoes", price: "Rs. 2859.00"},
     {title: "Premium sport shoes", price: "Rs. 3499.00"},
     {title: "Urban street sneakers", price: "Rs. 3299.00"},
     {title: "Classic retro trainers", price: "Rs. 2199.00"},
   ];

   return(
     <section className="popular-section">
       <div className="popular-content">
         <div className="trending-badge">
           <span className="red-line"></span>
           <span className="trending-text">Our Trending Shoes</span>
         </div>
         <h2 className="popular-title">Most Popular<br />Products</h2>
         <p className="popular-desc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente corporis impedit quod.
         </p>
         <button className="explore-btn">Explore</button>
       </div>
      
       <div className="popular-slider">
         <div className="popular-track">
           {products.map((item,index) => (
             <div className="product-card" key={`track1-${index}`}>
                 <div className="product-img-wrapper">
                   <img src={ppShoe} alt={item.title} className="product-img" />
                 </div>
                 <div className="product-details">
                   <h4 className="product-name">{item.title}</h4>
                   <div className="product-price-row">
                     <span className="product-price">{item.price}</span>
                     <button className="product-arrow-btn">
                       <ChevronRight size={16} color="white"/>
                     </button>
                   </div>
                 </div>
             </div>
           ))}
         </div>
       </div>

       <div className="popular-pagination">
         <span className="p-dot active"></span>
         <span className="p-dot"></span>
         <span className="p-dot"></span>
       </div>
     </section>
   );
 };

export default PopularProducts;