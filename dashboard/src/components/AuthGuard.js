import React, { useEffect, useState } from "react";

function AuthGuard({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      // First check URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const authFromUrl = urlParams.get('auth');
      
      if (authFromUrl === 'true') {
        const userFromUrl = {
          name: urlParams.get('name'),
          role: urlParams.get('role'),
          email: urlParams.get('email')
        };
        
        // Store in localStorage for future visits
        localStorage.setItem("user", JSON.stringify(userFromUrl));
        
        // Clean up URL for security
        window.history.replaceState({}, document.title, window.location.pathname);
        
        setUser(userFromUrl);
        setIsAuthenticated(true);
        setLoading(false);
        return;
      }
      
      // Fallback to localStorage
      const userData = localStorage.getItem("user");
      
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          localStorage.removeItem("user");
        }
      }
      
      setLoading(false);
    };

    checkAuth();
    
    // Also listen for storage events (in case user logs in from another tab)
    const handleStorageChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3001/signup";
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="access-denied-container">
        <div className="access-denied-card">
          <div className="access-denied-icon">🔒</div>
          <h2 className="access-denied-title">Access Denied</h2>
          <p className="access-denied-message">
            You need to login to access the trading dashboard.
          </p>
          <a 
            href="http://localhost:3001/signup" 
            className="access-denied-btn"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Pass user data to dashboard components via React Context or props */}
      {React.cloneElement(children, { user, onLogout: handleLogout })}
    </div>
  );
}

export default AuthGuard;