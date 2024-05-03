import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherApp from './Components/WeatherApp/WeatherApp.jsx'
import StatsPage from './Components/StatsPage/StatsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path='/weather-stats' element={<StatsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
