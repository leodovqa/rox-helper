import './Builds.css';

export default function Builds() {
  return (
    <div className="builds-container">
      <h2>Class Builds</h2>
      <p>Discover the best builds for your favorite classes in Ragnarok X: Next Generation.</p>
      
      <div className="build-class-section">
        <div className="class-header">
          <img src="https://static.divine-pride.net/images/skill/111.png" alt="Sniper" className="class-icon" />
          <h3>Sniper</h3>
        </div>

        <div className="build-card">
          <div className="build-header">
            <h4>F2P DEX-PEN Sniper</h4>
            <span className="build-badge">PVE / PVP</span>
          </div>
          
          <div className="build-content">
            <div className="build-column">
              <h5>Stat Allocation</h5>
              <p><strong>Primary:</strong> All points on <span>DEX</span> and <span>LUK</span>.</p>
              <p className="build-note">Focusing on DEX increases your base Physical Attack, while LUK provides additional Falcon damage and minor critical boosts. The core of this build relies heavily on Physical Penetration (PEN) from equipment rather than raw Attack Speed (ASPD).</p>
            </div>
            
            <div className="build-column">
              <h5>Key Equipment Focus</h5>
              <ul>
                <li><strong>Weapon:</strong> Long Bow (Preferably Blue/Gold) refined to +10 for massive PEN bonuses.</li>
                <li><strong>Accessories:</strong> Rings and Talismans that provide base Physical Penetration and Final Physical Penetration.</li>
                <li><strong>Enchantments:</strong> Prioritize Morroc enchantments for Physical Attack and PEN.</li>
              </ul>
            </div>
          </div>

          <div className="build-footer">
            <h5>Recommended Cards</h5>
            <div className="card-tags">
              <span className="card-tag">Physical PEN</span>
              <span className="card-tag">Final Physical PEN</span>
              <span className="card-tag">DEX +</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
