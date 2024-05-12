import {Link, Route, Routes } from "react-router-dom"
import './App.css';
import './Assets/Styles/landingpage.css'
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


function App() {
  return (
    <>
    <Navigationbar />   
    <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<PlaceholderForHome />} />
        <Route path="/pinlibraryoftools" element={<PinLibraryOfTools />} />
        <Route path="/postsignuppage" element={<PostSignUpPage />} />
        <Route path="/pjmworksheet" element={<PJMWorksheet />} />
        <Route path="/toolnavbar" element={<ToolNavBar />} />
        <Route path="/chooseteam" element={<ChooseTeam />} />
    </Routes>
    </>
  )
}

export default App;