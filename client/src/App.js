import {Link, Route, Routes } from "react-router-dom"
import './App.css';
import './Assets/Styles/landingpage.css'
import PJMWorksheet from './Tools/PJMWorksheet.js'
import Landingpage from './Components/Landingpage.js';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage.js';
import Navigationbar from './Components/Navigationbar.js';
import PinLibraryOfTools from './Components/PinLibraryOfTools.js';
import ContactPage from './Components/ContactPage.js';
import PostSignUpPage from './Components/PostSignUpPage.js';


function App() {
  return (
    <>
    <Navigationbar />   
    <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
    </>
  )
}

export default App;