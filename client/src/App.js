import './App.css';
import './Assets/Styles/landingpage.css'
import Landingpage from './Components/Landingpage.js';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage.js';
import Navigationbar from './Components/Navigationbar.js';
import DashboardPage from './Pages/DashboardPage.js';


function App() {
  return (
    <div className="App">
      <DashboardPage />
    </div>

  );
}

export default App;
