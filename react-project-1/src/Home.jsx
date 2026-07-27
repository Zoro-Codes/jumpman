import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Brands from './Brands';
import PopularProducts from './PopularProducts';
import Categories from './Categories';
import BestSelling from './BestSelling';
import PromoBanner from './PromoBanner';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Home = () => {
    return(
        <div className="app=container">
            <div className="hero-bg-wrapper">
                <div className="bg-watermark">JORDAN</div>

                <svg className="bg-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M -10,30 Q 50,10 110,40" stroke="rgba(255, 0, 0, 0.15)" fill="none" strokeWidth="0.1" />
                    <path d="M -10,80 Q 50,100 110,70" stroke="rgba(255, 0, 0, 0.1)" fill="none" strokeWidth="0.1" />
                </svg>

                <Navbar/>
                <Hero/>
            </div>

            <Brands/>
            <PopularProducts/>
            <Categories/>
            <BestSelling/>
            <PromoBanner/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;