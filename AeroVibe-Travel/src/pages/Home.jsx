import { Search, MapPin, Calendar, Plane, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="hero-section">
            {/* Left col */}
            <div className="hero-left fade-in">
              <div className="hero-label">
                <span>Premium Travel Experience</span>
              </div>

              <h1 className="hero-title">
                Discover the<br />
                world with <em>style</em>
              </h1>

              <p className="hero-subtitle">
                AeroVibe connects you to over 500 destinations worldwide.
                Seamless booking, curated experiences, and world-class
                service — at every altitude.
              </p>

              <div className="hero-cta-group">
                <Link to="/explore" className="btn btn-primary">
                  Explore Flights
                  <ArrowRight size={18} />
                </Link>
                <div className="hero-cta-text">
                  <Star size={14} fill="var(--gold)" color="var(--gold)" />
                  <span style={{ color: 'var(--ink-muted)', fontSize: '0.85rem' }}>
                    Trusted by <strong style={{ color: 'var(--ink)' }}>1M+</strong> travelers
                  </span>
                </div>
              </div>
            </div>

            {/* Right col — visual card */}
            <div className="hero-right fade-in fade-in-delay-2">
              <div className="hero-image-card">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85&fit=crop"
                  alt="Aerial view of airplane wing over clouds"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'var(--radius-xl)' }}
                />
              </div>

              {/* Floating card: top-left */}
              <div className="hero-float-card hero-float-card--tl">
                <div className="float-card-label">Departures today</div>
                <div className="float-card-value">1,348</div>
                <div className="float-card-sub">across 80 countries</div>
              </div>

              {/* Floating card: bottom-right */}
              <div className="hero-float-card hero-float-card--br">
                <div className="float-card-label">Best fare found</div>
                <div className="float-card-value">$299</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                  <Star size={10} fill="var(--gold)" color="var(--gold)" />
                  <span className="float-card-sub">New York → Tokyo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-row">
        <div className="stat-item fade-in">
          <h3>500+</h3>
          <p>Global destinations</p>
        </div>
        <div className="stat-item fade-in fade-in-delay-1">
          <h3>1M+</h3>
          <p>Happy travelers</p>
        </div>
        <div className="stat-item fade-in fade-in-delay-2">
          <h3>24/7</h3>
          <p>Concierge support</p>
        </div>
      </div>

      {/* ── Search ── */}
      <div className="search-bar-section">
        <div className="container">
          <div className="search-bar-container">
            <h2 className="search-bar-title">
              Where would you like to go?
            </h2>

            <div className="search-form">
              <div className="search-field">
                <label><MapPin size={12} /> Destination</label>
                <input type="text" placeholder="City or airport" />
              </div>
              <div className="search-field">
                <label><Calendar size={12} /> Date</label>
                <input type="date" />
              </div>
              <div className="search-field">
                <label><Plane size={12} /> Class</label>
                <select>
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
              <div className="search-btn-wrap">
                <Link to="/explore" className="btn btn-primary">
                  <Search size={18} />
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why AeroVibe ── */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">Why AeroVibe</div>
            <h2 className="section-title">
              Travel beyond <em>expectations</em>
            </h2>
            <p className="section-subtitle">
              We reimagined travel booking from the ground up. No noise, no friction 
              — just the journey you deserve.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item fade-in">
              <div className="why-number">01</div>
              <div className="why-title">Curated Selection</div>
              <p className="why-desc">
                Every route is hand-selected and quality-verified. We only partner 
                with airlines that meet our premium standards.
              </p>
            </div>
            <div className="why-item fade-in fade-in-delay-1">
              <div className="why-number">02</div>
              <div className="why-title">Transparent Pricing</div>
              <p className="why-desc">
                The price you see is the price you pay. No hidden fees, no last-minute 
                surprises — ever.
              </p>
            </div>
            <div className="why-item fade-in fade-in-delay-2">
              <div className="why-number">03</div>
              <div className="why-title">Dedicated Support</div>
              <p className="why-desc">
                A real human answers your call within 60 seconds, any time of day 
                or night, anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: 'var(--bg)' }}>
        <div className="container footer-strip">
          <p>© 2025 AeroVibe. All rights reserved.</p>
          <p>Crafted with precision.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
