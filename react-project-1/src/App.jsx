import React from "react";
 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 import './App.css';

 import Home from './Home';
 import MenShop from './MenShop';
 import Sale from './Sale';
 import AllDeals from './AllDeals';
 import Profile from './Profile';
 import Orders from './Orders';
 import Subscription from './Subscription';

 function App(){
   return(
     <Router>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/men" element={<MenShop/>}/>
         <Route path="/sale" element={<Sale/>}/>
         <Route path="/all-deals" element={<AllDeals/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/orders" element={<Orders/>}/>
         <Route path="/subscription" element={<Subscription/>}/>
       </Routes>
     </Router>
   );
 }

 export default App;

