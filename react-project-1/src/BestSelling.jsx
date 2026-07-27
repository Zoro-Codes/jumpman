import React,{useEffect,useState} from 'react';
import bsShoe from './assets/bs.png';
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css'; 

const BestSelling = () => {
   const [activeFilter, setActiveFilter] = useState('Man');

   const filters = ['Man', 'Women', 'Boy', 'Girl'];

   const products = [
     {id: 1, name:"Formal canvas shoe for man", price: "22988.00", oldPrice: "24999.00", isNew: true},
     {id: 2, name:"Sneakers shoe for man", price: "32999.00", oldPrice: "34999.00", isNew: true},
     {id: 3, name:"Slick Sneakers shoe", price: "22988.00", oldPrice: "24999.00", isNew: true},
     {id: 4, name:"Slick running shoes", price: "22988.00", oldPrice: "24999.00", isNew: true},
     {id: 5, name:"Formal canvas shoe for man", price: "32999.00", oldPrice: "34999.00", isNew: true},
     {id: 6, name:"Formal slick shoe for man", price: "32999.00", oldPrice: "34999.00", isNew: true},
   ];

   return(
     <section className="bs-section">
       <div className="section-header">
         <span className="dash-line"></span>
         <h2 className="title">Best Selling</h2>
         <span className="dash-line"></span>
       </div>

       <div className="filter-container">
         {filters.map((filter) => (
           <button 
             key={filter} 
             className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
             onClick={() => setActiveFilter(filter)}
           >
             {filter}
           </button>
         ))}
       </div>

       <div className="bs-grid">
         {products.map((product) => (
           <div className="bs-card" key={product.id}>
             {product.isNew && <div className="badge-new">NEW</div>}
            
             <div className="bs-img-wrapper">
               <img src={bsShoe} alt={product.name} className="bs-img" />
             </div>

             <div className="bs-details">
               <h4 className="bs-name">{product.name}</h4>

               <div className="bs-price-row">
                 <div className="price-group">
                   <span className="current-price">{product.price}</span>
                   <span className="old-price">{product.oldPrice}</span>
                 </div>

                 <button className="bs-btn">
                   <ArrowUpRight size={16} color="white"/>
                 </button>
               </div>
             </div>
           </div>
         ))}
       </div>
     </section>
   );
 };

 export default BestSelling;