import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ user, onLogout }) => {
    const [selectedMenu,setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen,setIsProfileDropdownOpen] =useState(false);
    
    const handleMenuClick =(index)=>{
        setSelectedMenu(index);
    }
    
    const handleProfileClick = () =>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }
    
    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    const menuClass = "menu";
    const activeMenuClass = "menu selected";
    return (
        <div className='menu-container'>
            <img src='logo.png' style={{width:"40px"}}/>
            <div className='menus'>
                <ul>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/" onClick={()=>{handleMenuClick(0)}}>
                        <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>{handleMenuClick(1)}}>
                        <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>{handleMenuClick(2)}}>
                        <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>{handleMenuClick(3)}}>
                        <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>{handleMenuClick(4)}}>
                        <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>{handleMenuClick(5)}}>
                        <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr/>
                <div className='profile' onClick={handleProfileClick}>
                    <div className='avatar'>{getInitials(user?.name)}</div>
                    <p className='username'>{user?.name || 'USER'}</p>
                </div>
                
                {/* Simple logout button - always visible */}
                <button 
                    className='logout-btn'
                    onClick={onLogout}
                    title="Logout"
                >
                    Logout
                </button>
                
                {isProfileDropdownOpen && (
                    <div className='profile-dropdown'>
                        <div className='dropdown-item'>
                            <small className='text-muted'>Role: {user?.role}</small>
                        </div>
                        <div className='dropdown-item'>
                            <small className='text-muted'>{user?.email}</small>
                        </div>
                        <hr style={{margin: '8px 0'}} />
                        <div className='dropdown-item logout-item' onClick={onLogout}>
                            <span>Logout</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Menu;