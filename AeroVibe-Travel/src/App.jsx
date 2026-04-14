import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Compass, Plane } from 'lucide-react';
import HomePage from './pages/Home';
import ExplorePage from './pages/Explore';
import FlightDetails from './pages/FlightDetails';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Navigation Link Component
const NavLink = ({ to, children, icon: Icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      <Icon size={15} />
      <span>{children}</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon-wrap">
            <Plane size={18} />
          </div>
          <span className="logo-wordmark">AeroVibe</span>
        </Link>

        {/* Nav Links */}
        <div className="nav-links">
          <NavLink to="/" icon={Home}>Home</NavLink>
          <NavLink to="/explore" icon={Compass}>Explore</NavLink>
        </div>

        {/* CTA */}
        <button className="btn btn-primary btn-sm">Get Started</button>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/flight/:id" element={<FlightDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
