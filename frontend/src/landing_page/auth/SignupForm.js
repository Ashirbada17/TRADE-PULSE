import React, { useState } from "react";
import axios from "axios";

function SignupForm({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

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
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8000/api/signup", formData);
      
      if (response.data.message === "User created successfully") {
        setSuccess("Account created successfully! You can now login.");
        setFormData({ name: "", email: "", password: "" });
        setTimeout(() => {
          onSwitchToLogin();
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>TradePulse</h1>
          <p>Professional Trading Platform</p>
        </div>
        
        <div className="auth-card">
          <div className="auth-card-header">
            <h3>Create Account</h3>
            <p>Join our trading platform</p>
          </div>
          
          <div className="auth-card-body">
            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}
            
            {success && (
              <div className="auth-success">
                {success}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
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
                  placeholder="Create a password"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="auth-btn auth-btn-secondary auth-btn-full"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
            
            <div className="auth-switch">
              <span>Already have an account? </span>
              <button 
                className="auth-link"
                onClick={onSwitchToLogin}
              >
                Sign in here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;