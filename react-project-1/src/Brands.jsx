import React from "react";
import { Search, ShoppingCart, User, ChevronRight, ArrowRight, ArrowUpRight, Star} from 'lucide-react';
import './App.css'; 

import nikeLogo from './assets/nike.png'
import pumaLogo from './assets/puma.png'
import reebokLogo from './assets/reebok.png'
import nbLogo from './assets/new-balance.png'
import filaLogo from './assets/fila.png'
import adidasLogo from './assets/adidas.jpg'
import asicsLogo from './assets/asics.jpg'
  
  const Brands = () => {
    return(
      <section className="brands-section">
        <h2 className="brands-title">Brands</h2>

        <div className="brands-slider">
          <div className="brands-logo-track">
            <img src={nikeLogo} alt="NIke" className="brand-logo" />
            <img src={pumaLogo} alt="Puma" className="brand-logo" />
            <img src={reebokLogo} alt="Reebok" className="brand-logo" />
            <img src={nbLogo} alt="New Balance" className="brand-logo scale-up" />
            <img src={filaLogo} alt="Fila" className="brand-logo scale-up" />
            <img src={adidasLogo} alt="Adidas" className="brand-logo scale-up" />
            <img src={asicsLogo} alt="Asics" className="brand-logo scale-up" />
          </div>

          <div className="brands-logo-track">
            <img src={nikeLogo} alt="NIke" className="brand-logo" />
            <img src={pumaLogo} alt="Puma" className="brand-logo" />
            <img src={reebokLogo} alt="Reebok" className="brand-logo" />
            <img src={nbLogo} alt="New Balance" className="brand-logo scale-up" />
            <img src={filaLogo} alt="Fila" className="brand-logo scale-up" />
            <img src={adidasLogo} alt="Adidas" className="brand-logo scale-up" />
            <img src={asicsLogo} alt="Asics" className="brand-logo scale-up" />
          </div>
        </div>
      </section>
    );
  };


export default Brands;