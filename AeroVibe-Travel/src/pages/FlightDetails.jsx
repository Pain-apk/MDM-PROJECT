import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, Wifi, Coffee, Music, Zap } from 'lucide-react';

const FLIGHTS_DATA = [
  {
    id: 1, destination: 'Tokyo, Japan', price: 850, time: '12h 30m', type: 'Direct',
    class: 'Economy',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=80&fit=crop',
    description: 'Experience the perfect blend of ancient tradition and ultra-modern futurism. Tokyo is a city that will redefine every expectation you have of travel.'
  },
  {
    id: 2, destination: 'Paris, France', price: 620, time: '8h 45m', type: '1 Stop',
    class: 'Business',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80&fit=crop',
    description: 'The city of light awaits with its romantic boulevards, world-class culinary scene, and an art culture that has defined civilization for centuries.'
  },
  {
    id: 3, destination: 'New York, USA', price: 450, time: '6h 15m', type: 'Direct',
    class: 'Economy',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900&q=80&fit=crop',
    description: 'The concrete jungle where ambition meets energy. New York City is the capital of the world — and every minute here confirms exactly why.'
  },
  {
    id: 4, destination: 'Santorini, Greece', price: 780, time: '10h 20m', type: '1 Stop',
    class: 'First Class',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80&fit=crop',
    description: 'Pristine whitewashed architecture cascading down volcanic cliffs above the Aegean. Santorini offers the most breathtaking sunsets on the planet.'
  },
  {
    id: 5, destination: 'Bali, Indonesia', price: 590, time: '14h 10m', type: 'Direct',
    class: 'Economy',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80&fit=crop',
    description: 'A spiritual paradise of emerald terraces, ancient temples, and pristine surf. Bali restores the soul and ignites the senses in equal measure.'
  },
  {
    id: 6, destination: 'London, UK', price: 540, time: '7h 50m', type: 'Direct',
    class: 'Business',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&fit=crop',
    description: 'Where centuries of history walk alongside a dynamic, contemporary culture. London is arguably the world\'s most complete city.'
  },
];

const FlightDetails = () => {
  const { id } = useParams();
  const flight = FLIGHTS_DATA.find(f => f.id === parseInt(id));

  if (!flight) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '24px' }}>✈️</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '12px' }}>
          Flight not found
        </h2>
        <p style={{ color: 'var(--ink-muted)', marginBottom: '32px' }}>
          This route doesn't exist. Try exploring other destinations.
        </p>
        <Link to="/explore" className="btn btn-primary">
          Back to Explore
        </Link>
      </div>
    );
  }

  const classBadge = flight.class === 'Economy'
    ? 'badge-economy' : flight.class === 'Business'
    ? 'badge-business' : 'badge-first';
  const typeBadge = flight.type === 'Direct' ? 'badge-direct' : 'badge-stop';
  const total = (flight.price + 42.50).toFixed(2);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="container">
        <div className="detail-hero fade-in">

          {/* Back link */}
          <Link to="/explore" className="back-link">
            <ArrowLeft size={15} />
            Back to all flights
          </Link>

          <div className="detail-layout">
            {/* ── Left: flight info ── */}
            <div>
              {/* Visual header */}
              <div className="detail-visual" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src={flight.image}
                  alt={flight.destination}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Badge row */}
              <div className="detail-badge-row">
                <span className={`badge ${typeBadge}`}>{flight.type}</span>
                <span className={`badge ${classBadge}`}>{flight.class}</span>
                <span className="badge badge-economy">{flight.time}</span>
              </div>

              {/* Title */}
              <h1 className="detail-title">{flight.destination}</h1>
              <p className="detail-description">{flight.description}</p>

              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
                <span className="label-text">What's included</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              {/* Amenities */}
              <div className="amenities-grid">
                <div className="amenity">
                  <div className="amenity-icon">
                    <Wifi size={20} />
                  </div>
                  <div>
                    <h4>High-speed Wi-Fi</h4>
                    <p>Stay connected throughout your entire journey at no extra cost.</p>
                  </div>
                </div>
                <div className="amenity">
                  <div className="amenity-icon">
                    <Coffee size={20} />
                  </div>
                  <div>
                    <h4>Gourmet Dining</h4>
                    <p>World-class meals prepared fresh by our onboard culinary team.</p>
                  </div>
                </div>
                <div className="amenity">
                  <div className="amenity-icon">
                    <Music size={20} />
                  </div>
                  <div>
                    <h4>Entertainment</h4>
                    <p>1,000+ hours of films, series, music, and podcasts on demand.</p>
                  </div>
                </div>
                <div className="amenity">
                  <div className="amenity-icon">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4>Power & Charging</h4>
                    <p>Universal power outlets and USB charging at every seat.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: booking card ── */}
            <div>
              <div className="booking-card">
                <div className="booking-card-header">
                  <div className="booking-price-label">Starting from</div>
                  <div className="booking-price">${flight.price}</div>
                  <div className="booking-price-sub">per person, one-way</div>
                </div>

                {/* Breakdown */}
                <div className="booking-line">
                  <span>Base fare</span>
                  <span>${flight.price}</span>
                </div>
                <div className="booking-line muted">
                  <span>Taxes &amp; fees</span>
                  <span>$42.50</span>
                </div>

                <div className="booking-total">
                  <span className="booking-total-label">Total due</span>
                  <span className="booking-total-price">${total}</span>
                </div>

                <button className="btn btn-primary booking-cta">
                  Confirm Booking
                </button>

                <div className="booking-assurances">
                  <div className="assurance-item">
                    <CheckCircle size={15} color="#2e7d32" />
                    <span>Free cancellation within 24 hours</span>
                  </div>
                  <div className="assurance-item">
                    <Shield size={15} color="var(--gold)" />
                    <span>Travel insurance included</span>
                  </div>
                  <div className="assurance-item">
                    <CheckCircle size={15} color="#2e7d32" />
                    <span>Price lock guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
