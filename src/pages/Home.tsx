import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to ROX Helper</h2>
      <p>Your companion guide for Ragnarok X: Next Generation.</p>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>EXP Guide</h3>
          <p>Find the best spots to grind based on your base and job levels. Optimize your stamina usage.</p>
        </div>
        <div className="feature-card empty">
          <h3>More Features Coming Soon</h3>
          <p>We are constantly updating our database with more tools to help you on your journey in Midgard.</p>
        </div>
      </div>
    </div>
  );
}
