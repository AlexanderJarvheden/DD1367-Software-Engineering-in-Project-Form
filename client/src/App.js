import './App.css';
import './Assets/Styles/landingpage.css'
import Landingpage from './Components/Landingpage.js';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage.js';
import Navigationbar from './Components/Navigationbar.js';
import DashboardPage from './Pages/DashboardPage.js';
import ToolLibraryPage from './Pages/ToolLibraryPage.js'
import PlannerSidemenu from './Pages/PlannerSidemenuPage.js';


function App() {
  return (
    <div className="App">
      <PlannerSidemenu />
      <ToolLibraryPage />
    </div>
  );
}

export default App;
