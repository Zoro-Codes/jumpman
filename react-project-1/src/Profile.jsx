import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {

    const [activeTab, setActiveTab] = useState("account");

    const [profileData, setProfileData] = useState({
        firstName: 'Akash',
        lastName: '',
        email: '',
        phone: ''
    });

    const [addressData, setAddressData] = useState({
        street: '',
        city: '',
        zip: ''
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        console.log('Saved Profile Data:', profileData);
        alert('Profile updated successfully!');
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();
        console.log('Saved Address Data:', addressData);
        alert('Address updated successfully!');
    };

    return(
        <>
            <div className="profile-page-container">
                <div className="profile-header-text">
                    <h1>My Profile</h1>
                    <p>Manage your account details and addresses here.</p>
                </div>

                <div className="profile-layout">
                    {/* SIDEBAR NAVIGATION */}
                    <aside className="profile-sidebar">
                        <ul>
                            <li 
                                className={activeTab === "account" ? "active" : ""} 
                                onClick={() => setActiveTab("account")}
                            >
                                Account Details
                            </li>
                            <li 
                                className={activeTab === "addresses" ? "active" : ""} 
                                onClick={() => setActiveTab("addresses")}
                            >
                                Addresses
                            </li>
                            <li 
                                className={activeTab === "payment" ? "active" : ""} 
                                onClick={() => setActiveTab("payment")}
                            >
                                Payment Methods
                            </li>
                            <li 
                                className={activeTab === "orders" ? "active" : ""} 
                                onClick={() => setActiveTab("orders")}
                            >
                                Order History
                            </li>
                        </ul>
                    </aside>

                    {/* DYNAMIC CONTENT AREA */}
                    <div className="profile-content">
                        
                        {/* --- TAB 1: ACCOUNT DETAILS --- */}
                        {activeTab === "account" && (
                            <>
                                <h2>Account Details</h2>
                                <form className="profile-form" onSubmit={handleProfileSubmit}>
                                    <div className="form-row">
                                        <div className="profile-input-group">
                                            <label htmlFor="firstName">First Name</label>
                                            <input 
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={profileData.firstName}
                                                onChange={handleProfileChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                        
                                    <div className="profile-input-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input 
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={profileData.lastName}
                                            onChange={handleProfileChange}
                                            required
                                        />
                                    </div>

                                    <div className="profile-input-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input 
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={profileData.email}
                                            onChange={handleProfileChange}
                                            required
                                        />
                                    </div>

                                    <div className="profile-input-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input 
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={profileData.phone}
                                            onChange={handleProfileChange}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="save-btn">Save Changes</button>
                                </form>
                            </>
                        )}

                        {/* --- TAB 2: ADDRESSES --- */}
                        {activeTab === "addresses" && (
                            <>
                                <h2>Saved Addresses</h2>
                                <form className="profile-form" onSubmit={handleAddressSubmit}>
                                    <div className="profile-input-group">
                                        <label htmlFor="street">Street Address</label>
                                        <input 
                                            type="text"
                                            id="street"
                                            name="street"
                                            placeholder="123 Main St, Apt 4B"
                                            value={addressData.street}
                                            onChange={handleAddressChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="profile-input-group">
                                            <label htmlFor="city">City</label>
                                            <input 
                                                type="text"
                                                id="city"
                                                name="city"
                                                placeholder="Kolkata"
                                                value={addressData.city}
                                                onChange={handleAddressChange}
                                                required
                                            />
                                        </div>
                                        <div className="profile-input-group">
                                            <label htmlFor="zip">ZIP Code</label>
                                            <input 
                                                type="text"
                                                id="zip"
                                                name="zip"
                                                placeholder="700001"
                                                value={addressData.zip}
                                                onChange={handleAddressChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="save-btn">Save Address</button>
                                </form>
                            </>
                        )}

                        {/* --- TAB 3: PAYMENT METHODS --- */}
                        {activeTab === "payment" && (
                            <>
                                <h2>Payment Methods</h2>
                                <p style={{ color: '#666', marginBottom: '20px' }}>Manage your saved cards for faster checkout.</p>
                                
                                <div style={{ padding: '40px 20px', textAlign: 'center', border: '1px dashed #ccc', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
                                    <p style={{ color: '#888', margin: 0, fontSize: '15px' }}>You have no saved payment methods.</p>
                                </div>

                                <button className="save-btn">+ Add New Card</button>
                            </>
                        )}

                        {/* --- TAB 4: ORDER HISTORY --- */}
                        {activeTab === "orders" && (
                            <>
                                <h2>Order History</h2>
                                
                                <div style={{ padding: '60px 20px', textAlign: 'center', border: '1px dashed #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                                    <p style={{ color: '#888', margin: 0, fontSize: '15px' }}>You haven't placed any orders yet.</p>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;