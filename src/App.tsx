import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Exp from './pages/Exp';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ROX Helper</h1>
        <Navigation />
      </header>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exp" element={<Exp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
