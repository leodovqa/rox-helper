import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Exp from './pages/Exp';
import Guide from './pages/Guide';
import Builds from './pages/Builds';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <Navigation />
        <h1>ROX Helper</h1>
        <div className="header-spacer"></div>
      </header>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/builds" element={<Builds />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
