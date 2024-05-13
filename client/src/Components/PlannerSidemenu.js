import React, { useState } from 'react';
import '../Assets/Styles/buttonmeny2.css';
import menu_logo2 from '../Assets/Icons/menu_logo2.svg';

import member from '../Assets/Icons/addmember_icon.svg';
import clipper from '../Assets/Icons/clipper_icon.svg';
import draw_icon from '../Assets/Icons/draw_icon.svg';
import help_icon from '../Assets/Icons/help_icon.svg';
import insert_icon from '../Assets/Icons/insert_icon.svg';
import teams2_icon from '../Assets/Icons/teams2_icon.svg';
import text_icon from '../Assets/Icons/text_icon.svg';
import picture from '../Assets/Icons/picture_icon.svg';

function Sidebar2() {
    const [activeItem, setActiveItem] = useState('dashboard'); // Keeps track of the currently active item

    const menuItems = [
        { name: 'dashboard', icon: teams2_icon, cursor: 'pointer' },
        { name: 'library', icon: clipper, cursor: 'pointer' },
        { name: 'planner', icon: draw_icon, cursor: 'crosshair' },
        { name: 'social', icon: text_icon, cursor: 'text' },
        { name: 'teams', icon: insert_icon, cursor: 'pointer' },
        { name: 'projects', icon: member, cursor: 'pointer' },
        { name: 'picture', icon: picture, cursor: 'copy' },
        { name: 'helper', icon: help_icon, cursor: 'pointer' },
    ];


    return (
        <div className="sidebar2">
            <div className="logo2">
                <img src={menu_logo2} alt="Menu Logo" />
            </div>
            {menuItems.map(item => (
                <div
                    key={item.name}
                    className={`menu-item2 ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => setActiveItem(item.name)}
                    style={{ cursor: item.cursor }}
                >
                    <div className="menu-icon2">
                        <img src={item.icon} alt={`${item.name} icon`} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sidebar2;
