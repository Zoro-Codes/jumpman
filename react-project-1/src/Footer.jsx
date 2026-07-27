import React from "react";
import myLogoImage from './assets/nav-logo.png';
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css';  

const Footer = () => {
   return(
     <footer className="footer-section">
       <div className="footer-container">
         <div className="footer-brand">
           <div className="brand-logo">
             <img src={myLogoImage} alt="Jordan Logo" className="logo-img" />
             <h3>JORDAN</h3>
           </div>
           <p className="footer-desc">
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </p>
         </div>

         <div className="footer-links">
           <h4>SHOP</h4>
           <ul>
             <li><a href="#">All Collections</a></li>
             <li><a href="#">Winter Editions</a></li>
             <li><a href="#">Discount</a></li>
           </ul>
         </div>

         <div className="footer-links">
           <h4>COMPANY</h4>
           <ul>
             <li><a href="#">About Us</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#">Affiliate</a></li>
           </ul>
         </div>

         <div className="footer-links">
           <h4>SUPPORT</h4>
           <ul>
             <li><a href="#">FAQs</a></li>
             <li><a href="#">Cookies Policy</a></li>
             <li><a href="#">Terms Of Use</a></li>
           </ul>
         </div>
      
         <div className="footer-payment">
           <h4>PAYMENT METHODS</h4>

           <div className="payment-icons">
             <img src="https:upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="pay-icon" />
             <img src="https:upload.wikimedia.org/wikipedia/commons/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg" alt="Visa" className="pay-icon" />
             <img src="https:upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="pay-icon" />
           </div>
         </div>
       </div>

       <div className="footer-bottom">
         <p>Copyright &copy; 2024 Design. All right reserved.</p>
       </div>
     </footer>
   );
 };

export default Footer;