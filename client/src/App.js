import {Route, Routes } from "react-router-dom"
import './App.css';
import PJMWorksheet from './Tools/PJMWorksheet.js'

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