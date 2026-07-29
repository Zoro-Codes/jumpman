import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Orders = () => {
    return(
         <div style={{backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div style={{backgroundColor: '#000', paddingBottom: '80px'}}><Navbar/></div>
            <main style={{padding: '60px 5%', flexGrow: 1}}>
                <h1>My Orders</h1>
                <p>Track your recent sneaker purchases here.</p>
            </main>
            <Footer/>
        </div>
    );
};

export default Orders;