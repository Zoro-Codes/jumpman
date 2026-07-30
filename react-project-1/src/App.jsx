import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ShopProvider } from './ShopContext'; 
import GlobalModals from './GlobalModals'; 

import Home from './Home';
import MenShop from './MenShop';
import WomenShop from './WomenShop';
import KidShop from './KidShop';
import Sale from './Sale';
import AllDeals from './AllDeals';
import Profile from './Profile';
import AuthPage from './AuthPage';

function App() {
  return (
    <Router>
      <ShopProvider>
        <GlobalModals /> 
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/men" element={<MenShop/>}/>
          <Route path="/women" element={<WomenShop/>}/>
          <Route path="/kid" element={<KidShop/>}/>
          <Route path="/sale" element={<Sale/>}/>
          <Route path="/all-deals" element={<AllDeals/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/authpage" element={<AuthPage/>}/>
        </Routes>
      </ShopProvider>
    </Router>
  );
}

export default App;