import './App.css';
import './Assets/Styles/landingpage.css'
import Landingpage from './Components/Landingpage.js';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage.js';
import Navigationbar from './Components/Navigationbar.js';
import PinLibraryOfTools from './Components/PinLibraryOfTools.js';
import ContactPage from './Components/ContactPage.js';
import PostSignUpPage from './Components/PostSignUpPage.js';


function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <PostSignUpPage/>
    </div>

  );
}

export default App;