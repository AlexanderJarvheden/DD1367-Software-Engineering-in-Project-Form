import './App.css';
import './Assets/Styles/landingpage.css'
import Landingpage from './Components/Landingpage.js';
import LoginPage from './Components/LoginPage.js';
import Navigationbar from './Components/Navigationbar.js';


function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Landingpage/>
    </div>

  );
}

export default App;
