import React, { useState } from "react";
import axios from "axios";
import LoginSuccess from "./LoginSuccess";

function Login({ onSwitchToSignup }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/login", formData);
      
      if (response.data.message === "Login successful") {
        // Store user info
        const userInfo = {
          name: response.data.name,
          role: response.data.role,
          email: formData.email
        };
        
        setUserData(userInfo);
        setLoginSuccess(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Show success page after login
  if (loginSuccess && userData) {
    return <LoginSuccess userData={userData} />;
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>TradePulse</h1>
          <p>Professional Trading Platform</p>
        </div>
        
        <div className="auth-card">
          <div className="auth-card-header">
            <h3>Sign In</h3>
            <p>Access your trading dashboard</p>
          </div>
          
          <div className="auth-card-body">
            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-field">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="auth-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="auth-btn auth-btn-primary auth-btn-full"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
            
            {onSwitchToSignup && (
              <div className="auth-switch">
                <span>Don't have an account? </span>
                <button 
                  className="auth-link"
                  onClick={onSwitchToSignup}
                >
                  Create one here
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;