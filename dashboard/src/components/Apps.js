import React from "react";
import "../index.css";

const Apps = () => {
  return (
    <div className="app-page">
      <header className="app-header">
        <img src="logo.png" alt="Logo" className="app-logo" />
        <h2>My App</h2>
      </header>

      <main className="app-main">
        <h1>Welcome to My App Page</h1>
        <p>This is a simple standalone React component with no routing.</p>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Apps;
