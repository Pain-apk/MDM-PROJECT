import { useState } from 'react';
import { Search, MapPin, Clock, Plane, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FLIGHTS_DATA = [
  {
    id: 1, destination: 'Tokyo, Japan', price: 850, time: '12h 30m',
    type: 'Direct', class: 'Economy', tag: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=80&fit=crop'
  },
  {
    id: 2, destination: 'Paris, France', price: 620, time: '8h 45m',
    type: '1 Stop', class: 'Business', tag: 'Romantic',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700&q=80&fit=crop'
  },
  {
    id: 3, destination: 'New York, USA', price: 450, time: '6h 15m',
    type: 'Direct', class: 'Economy', tag: 'City Break',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=700&q=80&fit=crop'
  },
  {
    id: 4, destination: 'Santorini, Greece', price: 780, time: '10h 20m',
    type: '1 Stop', class: 'First Class', tag: 'Luxury',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80&fit=crop'
  },
  {
    id: 5, destination: 'Bali, Indonesia', price: 590, time: '14h 10m',
    type: 'Direct', class: 'Economy', tag: 'Tropical',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=80&fit=crop'
  },
  {
    id: 6, destination: 'London, UK', price: 540, time: '7h 50m',
    type: 'Direct', class: 'Business', tag: 'Cultural',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80&fit=crop'
  },
];

const TYPE_FILTERS = ['All', 'Direct', '1 Stop'];
const CLASS_FILTERS = ['All Classes', 'Economy', 'Business', 'First Class'];

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [classFilter, setClassFilter] = useState('All Classes');

  const filtered = FLIGHTS_DATA.filter(f => {
    const matchesSearch = f.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'All' || f.type === typeFilter;
    const matchesClass = classFilter === 'All Classes' || f.class === classFilter;
    return matchesSearch && matchesType && matchesClass;
  });

  const getBadges = (flight) => {
    const typeBadge = flight.type === 'Direct' ? 'badge-direct' : 'badge-stop';
    const classBadge = flight.class === 'Economy'
      ? 'badge-economy' : flight.class === 'Business'
      ? 'badge-business' : 'badge-first';
    return { typeBadge, classBadge };
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="container">
        {/* ── Explore Header ── */}
        <div className="explore-hero fade-in">
          <div className="section-label">Explore</div>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>
            Find your <em>perfect</em> flight
          </h1>
          <p className="section-subtitle">
            Browse from {FLIGHTS_DATA.length} curated routes. Use filters to narrow 
            your search by type, class, or destination.
          </p>
        </div>

        {/* ── Filter bar ── */}
        <div className="explore-filter-bar fade-in">
          {/* Search input */}
          <div className="explore-search-wrap">
            <Search className="explore-search-icon" size={18} />
            <input
              type="text"
              placeholder="Search destination..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="explore-search"
            />
          </div>

          {/* Type pills */}
          <div className="filter-pills">
            {TYPE_FILTERS.map(t => (
              <button
                key={t}
                className={`filter-pill ${typeFilter === t ? 'active' : ''}`}
                onClick={() => setTypeFilter(t)}
              >
                {t}
              </button>
            ))}
            <div style={{ width: '1px', background: 'var(--border)', margin: '0 4px' }} />
            {CLASS_FILTERS.map(c => (
              <button
                key={c}
                className={`filter-pill ${classFilter === c ? 'active' : ''}`}
                onClick={() => setClassFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ── Results meta ── */}
        <div className="results-meta">
          <span className="results-count">
            {filtered.length} flight{filtered.length !== 1 ? 's' : ''} found
          </span>
          <div className="results-sort">
            <span>Sort by</span>
            <select>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Duration</option>
            </select>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="card-grid" style={{ paddingBottom: '100px' }}>
          {filtered.length > 0 ? (
            filtered.map((flight, idx) => {
              const { typeBadge, classBadge } = getBadges(flight);
              return (
                <div
                  key={flight.id}
                  className="flight-card fade-in"
                  style={{ animationDelay: `${idx * 0.07}s` }}
                >
                  {/* Visual header */}
                  <div className="flight-card-visual">
                    <img
                      src={flight.image}
                      alt={flight.destination}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Card body */}
                  <div className="flight-card-body">
                    <div className="flight-card-top">
                      <div>
                        <h3 className="flight-destination">{flight.destination}</h3>
                        <div className="flight-meta" style={{ marginTop: '8px' }}>
                          <div className="flight-meta-item">
                            <Clock size={12} />
                            {flight.time}
                          </div>
                          <div className="flight-meta-item">
                            <MapPin size={12} />
                            {flight.tag}
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="price-tag">
                          ${flight.price}
                          <span>/pp</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span className={`badge ${typeBadge}`}>{flight.type}</span>
                      <span className={`badge ${classBadge}`}>{flight.class}</span>
                    </div>

                    <div className="flight-card-footer">
                      <div className="flight-meta-item" style={{ fontSize: '0.78rem' }}>
                        <Plane size={12} />
                        AeroVibe Airlines
                      </div>
                      <Link
                        to={`/flight/${flight.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        View Details
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3>No flights found</h3>
              <p>Try adjusting your filters or search term.</p>
              <button
                className="btn btn-outline"
                onClick={() => { setSearchQuery(''); setTypeFilter('All'); setClassFilter('All Classes'); }}
                style={{ marginTop: '8px' }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
