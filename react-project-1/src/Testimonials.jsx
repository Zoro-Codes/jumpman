import React,{useEffect,useState} from "react";
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css'; 

const Testimonials = () => {
   const testimonials = [
     {
       id: 1,
       name: "Meythil Odex",
       rating: 5,
       text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perferendis accusamus aperiam neque repellat.",
       image: "https:res.cloudinary.com/ni0rf0la/image/upload/v1784529883/michael-dam-mEZ3PoFGs_k-unsplash-removebg-preview_ob7yj7.png"
     },
     {
       id: 2,
       name: "Vince Veras",
       rating: 5,
       text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perferendis accusamus aperiam neque repellat.",
       image: "https:res.cloudinary.com/ni0rf0la/image/upload/v1784529882/vince-veras-AJIqZDAUD7A-unsplash-removebg-preview_yecs5y.png"
     },
     {
       id: 3,
       name: "Jack Nakos",
       rating: 5,
       text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perferendis accusamus aperiam neque repellat.",
       image: "https:res.cloudinary.com/ni0rf0la/image/upload/v1784529883/jake-nackos-IF9TK5Uy-KI-unsplash-removebg-preview_fe4wnr.png"
     },
     {
       id: 4,
       name: "Micheal Dam",
       rating: 5,
       text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est perferendis accusamus aperiam neque repellat.",
       image: "https:res.cloudinary.com/ni0rf0la/image/upload/v1784529882/christopher-campbell-rDEOVtE7vOs-unsplash-removebg-preview_hnuwon.png"
     }
   ];

   const [currentIndex, setCurrentIndex] = useState(0);
   const [cardsPerview, setCardsPerview] = useState(2);

   useEffect(() => {
     const handleResize = () => {
       setCardsPerview(window.innerWidth > 768 ? 2 : 1);
     };

     handleResize();
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);

   const maxIndex = testimonials.length - cardsPerview;

   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
     }, 4000);

     return () => clearInterval(interval);
   }, [maxIndex]);

   return(
     <section className="testimonials-section">
       <div className="section-header">
         <span className="dash-line"></span>
         <h2 className="title">Client Testimonial</h2>
         <span className="dash-line"></span>
       </div>
      
       <div className="test-viewport">
         <div className="test-track" style={{'--slide-index': currentIndex}}>
           {testimonials.map((item) => (
             <div className="test-card" key={item.id}>
               <div className="test-img-wrapper">
                 <img src={item.image} alt={item.name} className="test-img" />
               </div>

               <div className="test-content">
                 <h4 className="test-name">{item.name}</h4>
                 <div className="test-stars">
                   {[...Array(item.rating)].map((_, i) =>( 
                     <Star key={i} size={14} fill="#f5b301" color="#f5b301"/>
                   ))}
                 </div>
                 <p className="test-text">{item.text}</p>
               </div>
             </div>
           ))}
         </div>
       </div>

       <div className="tm-pagination">
         {Array.from({ length: maxIndex + 1 }).map((_, index) => (
           <span 
             key={index} 
             className={`dot ${currentIndex === index ? 'active' : ''}`}
             onClick={() => setCurrentIndex(index)}
           ></span>
         ))}
       </div>
     </section>
   );
 };

export default Testimonials;