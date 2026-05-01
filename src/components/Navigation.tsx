import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navigation">
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <ul className="menu-links">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/exp" onClick={closeMenu}>EXP Guide</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
