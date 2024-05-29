import React from 'react'
import {  useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import PJMWorksheet from './Tools/PJMWorksheet.js'
import Landingpage from './Components/Landingpage.js';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage.js';
import PlaceholderForHome from './Components/PlaceholderForHome.js';
import Navigationbar from './Components/Navigationbar.js';
import PinLibraryOfTools from './Components/PinLibraryOfTools.js';
import ContactPage from './Components/ContactPage.js';
import PostSignUpPage from './Components/PostSignUpPage.js';
import ToolNavBar from './Components/ToolNavBar.js';
import ChooseTeam from './Components/ChooseTeam.js';
import DashboardPage from './Components/DashboardPage.js';
import ProcessLine from './Components/ProcessLine.js';
import Library from './Pages/ToolLibraryPage.js';
import FutureScenariosWorksheet from './Tools/FutureScenariosWorksheet.js';

import FutureScenariosButton from './Tools/ToolButtons/FutureScenariosButton.js';
import PJMButton from './Tools/ToolButtons/PJMButton.js';

import './App.css';
// import './Assets/Styles/landingpage.css'


function App() {
    //Kolla state på om user är logged in eller logged out
    const [loggedIn, setLoggedIn ] = useState(true)
    
    const toggleRoute = () =>{
        setLoggedIn(!loggedIn)
    }

    const handleLogin = () => {
        setLoggedIn(true)

    }

    const handleLogout = () => {
        setLoggedIn(false)
    }


    return (
        <>
            {loggedIn ? <DashboardPage /> : <Navigationbar />}
            <Routes>
              <Route exact path="/" element={ loggedIn ? <DashboardPage /> : <Landingpage />} />
              <Route path="/planner" element={<ProcessLine />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/home" element={<PlaceholderForHome />} />
              <Route path="/pinlibraryoftools" element={<PinLibraryOfTools />} />
              <Route path="/postsignuppage" element={<PostSignUpPage />} />
              <Route path="/pjmworksheet" element={<PJMWorksheet />} />
              <Route path="/fsw" element={<FutureScenariosWorksheet />} />
              <Route path="/pjmbutton" element={<PJMButton />} />
              <Route path="/fsb" element={<FutureScenariosButton />} />
              <Route path="/toolnavbar" element={<ToolNavBar />} />
              <Route path="/teams" element={<ChooseTeam />} />
              <Route path="/library" element={<Library />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
      );
}

export default App;