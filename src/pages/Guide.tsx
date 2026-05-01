import './Guide.css';

export default function Guide() {
  return (
    <div className="guide-container">
      <h2>ROX Ultimate Guide</h2>
      <p>A comprehensive guide to Ragnarok X: Next Generation based on the <a href="https://gamingph.com/2021/06/ragnarok-x-next-generation-ultimate-guide-rox/" target="_blank" rel="noopener noreferrer">GamingPH Ultimate Guide</a>.</p>
      
      <div className="guide-section">
        <h3>Core Mechanics & Systems</h3>
        <div className="guide-cards">
          <div className="guide-card">
            <h4>Classes</h4>
            <p>Six main classes (Swordsman, Acolyte, Mage, Thief, Archer, Merchant) each with two sub-classes and unique roles like tanking, healing, or crafting.</p>
          </div>
          <div className="guide-card">
            <h4>Odin’s Blessing</h4>
            <p>A crucial resource used to gain 5x Zenies, 5x EXP, and 1:1 Stamina while hunting monsters within 6 levels of your character.</p>
          </div>
          <div className="guide-card">
            <h4>Stamina</h4>
            <p>Earned by consuming Odin’s Blessing; it is required for "Life Skills" such as Fishing, Mining, Gardening, and Smelting.</p>
          </div>
          <div className="guide-card">
            <h4>Equipment</h4>
            <p>Includes Instance (White), Crafted (Blue), and Rare (Gold/Valkyrie) gear, which can be improved through Refinement, Awakening, and Enchantment.</p>
          </div>
        </div>
      </div>

      <div className="guide-section">
        <h3>Daily Routines & Progression</h3>
        <ul className="guide-list">
          <li><strong>Daily Tasks:</strong> Complete the <em>COC Mission</em> for headgear materials, <em>Guild Orders</em> for contribution, and <em>Daily Instances</em> for equipment and EXP.</li>
          <li><strong>Board Missions:</strong> A primary source of Base/Job EXP and Odin’s Blessing. Complete these daily!</li>
          <li><strong>Life Skills:</strong> Essential for end-game progression; players should focus on specific professions like Fishing or Mining to craft advanced materials.</li>
          <li><strong>Exchange Center:</strong> The main hub for trading "Bound" and "Non-bound" items using Crystals. Use it to buy materials or sell your crafted goods.</li>
        </ul>
      </div>

      <div className="guide-section tips">
        <h3>Key Tips for Success</h3>
        <ul>
          <li><strong>AFK Grinding:</strong> Use Odin’s Blessing only on monsters that provide the specific cards or materials you need. If you just need EXP, turn it off.</li>
          <li><strong>NPC Favor:</strong> Give gifts to NPCs to unlock hidden privileges, stats, and special items. Check their preferred gifts!</li>
          <li><strong>Kingdom Pass:</strong> Complete seasonal challenges to earn exclusive costumes, mounts, and upgrade materials. It's highly recommended to finish these tasks.</li>
        </ul>
      </div>
    </div>
  );
}
