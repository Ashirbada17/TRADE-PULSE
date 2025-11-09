import React from 'react'
import Topbar from "./TopBar";
import Dashboard from "./Dashboard";

function Home({ user, onLogout }) {
    return (
    <>
        <Topbar user={user} onLogout={onLogout} />
        <Dashboard/>
    </>
    );
}

export default Home;