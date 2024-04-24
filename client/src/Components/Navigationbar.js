import React, { useState, List } from 'react'
import Loopbox_logo from '../Assets/Images/Loopbox_logo.png'
import '../Assets/Styles/navigationbar.css'
import {HiOutlineBars3} from "react-icons/hi2";
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material"
import { useNavigate } from 'react-router-dom';

/**
 * Written by Alexander Järvheden
 * inspired by https://www.youtube.com/watch?v=GVjIflROwJ4&ab_channel=TheHyperArt
 * @returns 
 */

const Navigationbar = () => {
    const navigate = useNavigate();

    // Used to make sure that the navigation bar is responsible with smaller devices as well
    // Initializes the openMenu to be false
    const [openMenu, setOpenMenu] = useState(false) 

    const menuOptions = [
        {
            icon: Loopbox_logo
        },
        {
            text: "HOME"
        },
        {
            text: "CONTACT"
        },
        {
            text: "LOG IN"
        }
    ]

    return (
        <div className='header'>
            <div className='header-midline'>
                <div className='header-logo' onClick={() => navigate("/")}>
                    <img src={Loopbox_logo} alt=""/></div>
                <div className='header-midbuttons'>
                    <button className='home-button' onClick={() => navigate("/")}>HOME</button>
                    <button className='contact-button' onClick={() => navigate("/contact")}>CONTACT</button>
                </div>
                <button className='sign-up' onClick={() => navigate("/signup")}>SIGN UP</button>
                <button className='login-button' onClick={() => navigate("/login")}>LOG IN</button>
            </div>
        </div>
    )

//   return (
//     <nav>
//         <div className='nav-logo-container'>
//             <img src={Loopbox_logo} alt="" srcset="" />
//         </div>
//         <div className='navbar-links-container'>
//             <a href=''>HOME</a>
//             <a href=''>CONTACT</a>
//             <button className='primary-button'>LOG IN</button>
//         </div>
//         <div className='navbar-menu-container'>
//             {/* Menu option shows up when screen is to small to fit
//                 the whole navigation bar */}
//             <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
//         </div>
//         <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//             <Box sx={{ width: 250}}
//                 role="presentation"
//                 onClick={() => setOpenMenu(false)}
//                 onKeyDown={() => setOpenMenu(false)}
//             >
//                 <List>
//                     {menuOptions.map((item) => {
//                         <ListItem key={item.text} disablePadding>
//                             <ListItemButton>
//                                 <ListItemIcon>
//                                     {item.icon}
//                                 </ListItemIcon>
//                                 <ListItemText primary={item.text}/>
//                             </ListItemButton>
//                         </ListItem>
//                     })}
//                 </List>
//             </Box>

//         </Drawer>
//     </nav>
//   )
}

export default Navigationbar