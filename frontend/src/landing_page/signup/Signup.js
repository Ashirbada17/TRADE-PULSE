import React, { useState } from "react";
import Login from "../auth/Login";
import SignupForm from "../auth/SignupForm";

function Signup() {
  const [currentView, setCurrentView] = useState("welcome"); // welcome, login, signup

  if (currentView === "login") {
    return (
      <Login 
        onSwitchToSignup={() => setCurrentView("signup")}
      />
    );
  }

  if (currentView === "signup") {
    return (
      <SignupForm 
        onSwitchToLogin={() => setCurrentView("login")}
      />
    );
  }

  return (
    <div className="auth-container signup-compact">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>TradePulse</h1>
          <p>Professional Trading Platform</p>
        </div>
        
        <div className="auth-card">
          <div className="auth-card-body signup-welcome">
            <h3 className="auth-title">Welcome Back</h3>
            <p className="auth-subtitle">Choose an option to continue</p>
            
            <div className="auth-buttons">
              <button
                className="auth-btn auth-btn-primary"
                onClick={() => setCurrentView("login")}
              >
                Sign In
              </button>
              
              <button
                className="auth-btn auth-btn-secondary"
                onClick={() => setCurrentView("signup")}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
