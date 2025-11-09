import React, { useEffect } from "react";

function LoginSuccess({ userData }) {
  useEffect(() => {
    // Ensure user data is in localStorage
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  }, [userData]);

  const handleDashboardRedirect = () => {
    // Pass user data through URL parameters
    const userParams = new URLSearchParams({
      name: userData.name,
      role: userData.role,
      email: userData.email,
      auth: 'true'
    });
    
    const dashboardUrl = `http://localhost:3000?${userParams.toString()}`;
    window.location.replace(dashboardUrl);
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>TradePulse</h1>
          <p>Professional Trading Platform</p>
        </div>
        
        <div className="auth-card">
          <div className="auth-card-body auth-success-page">
            <div className="success-icon">✓</div>
            <h3>Welcome Back!</h3>
            
            <p className="success-message">
              Hello <strong>{userData?.name}</strong><br/>
              <span className="user-role">Role: {userData?.role}</span>
            </p>
            
            <button 
              className="auth-btn auth-btn-primary auth-btn-full"
              onClick={handleDashboardRedirect}
            >
              Access Trading Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSuccess;