import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

const AuthPage = () => {
    const [activeView, setActiveView] = useState('signup')

    return(
        <div className="auth-page-container">
            <div className="auth-toggle-btns">
                <button 
                    className={activeView === 'signin' ? 'active' : ''}
                    onClick ={() => setActiveView('signin')}
                    >
                        Sign In
                </button>

                <button 
                    className={activeView === 'signup' ? 'active' : ''}
                    onClick ={() => setActiveView('signup')}
                    >
                        Sign Up
                </button>
            </div>

                <div className="auth-card">
                    {activeView === 'signin' ? (
                        <>
                            <h2>Sign In</h2>
                            <p className="subtitle">Welcome back! Please enter your details.</p>

                            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="input-group">
                                    <label >Email Address</label>
                                    <input type="email" required/>
                                </div>
                                <div className="input-group">
                                    <label>Password</label>
                                    <input type="password" required/>
                                </div>

                                <button type="submit" className="submit-btn">Sign In</button>
                            </form>

                            <div className="auth-footer-text">
                                Don't have an account? <span onClick={() => setActiveView('signup')}>Sign Up</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>Sign Up</h2>
                            <p className="subtitle">Hello! Please enter your details.</p>

                            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="input-group">
                                    <label >Full Name</label>
                                    <input type="text" required/>
                                </div>

                                <div className="input-group">
                                    <label >Email Address</label>
                                    <input type="email" required/>
                                </div>

                                <div className="input-group">
                                    <label >New Password</label>
                                    <input type="password" required/>
                                </div>

                                <div className="input-group">
                                    <label >Confirm Password</label>
                                    <input type="password" required/>
                                </div>
                                <button type="submit" className="submit-btn">Create Account</button>
                            </form>

                            <div className="auth-footer-text">
                                Already have an account? <span onClick={() => setActiveView('signin')}>Sign In</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
    );
};

export default AuthPage;