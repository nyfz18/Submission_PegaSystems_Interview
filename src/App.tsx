// import react routing
import {
  Routes, 
  Route
} from 'react-router-dom';

// import components
import MainMenu from './components/MainMenu';
import EpicsPage from './components/pages/EpicsPage';
import BugsPage from './components/pages/BugsPage';
import HomePage from './components/pages/HomePage';

// import styles
import './App.css';

// Main App component
function App() {
  return (
    <div className="App">
      <MainMenu />
      <div className="App-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/epics" element={<EpicsPage />} />
          <Route path="/bugs" element={<BugsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;