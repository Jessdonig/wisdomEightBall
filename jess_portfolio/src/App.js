
import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <div className="App">
      <div className='nav-bar'><Navbar/></div>
      <div><LandingPage/></div>
      <div><ContactForm/></div>

    </div>
  );
}

export default App;
