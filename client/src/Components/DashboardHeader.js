// DashboardHeader.js
import React from 'react';
import '../Assets/Styles/header.css';
import headerButtonIcon from '../Assets/Icons/header_button.svg';

function Header({ onToggleSidebar, isExpanded }) {
    const headerClass = isExpanded ? "header" : "header expanded";

    return (
        <div className={headerClass}>
            {/* Rest of the header content */}
            <button className="header-button" onClick={onToggleSidebar}>
                <img src={headerButtonIcon} className="button-logo" alt="Toggle Sidebar" />
            </button>
        </div>
    );
}

export default Header;