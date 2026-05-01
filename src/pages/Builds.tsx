import './Builds.css';
import HoverTooltip from '../components/HoverTooltip';

export default function Builds() {
  return (
    <div className="builds-container">
      <h2>Class Builds</h2>
      <p>Discover the best builds for your favorite classes in Ragnarok X: Next Generation.</p>
      
      <div className="build-class-section">
        <div className="class-header">
          <img src="https://static.divine-pride.net/images/skill/111.png" alt="Sniper" className="class-icon" />
          <h3>Sniper: The Ultimate PEN/DEX Guide</h3>
        </div>

        <div className="build-card detailed-guide">
          <div className="build-header">
            <h4>Mastering Burst Damage (F2P & Whale Friendly)</h4>
            <span className="build-badge">PVE / PVP</span>
          </div>
          
          <div className="guide-intro">
            <p>If you are tired of relying entirely on your auto-attacks and want to see massive, screen-clearing numbers, the PEN/DEX Sniper build is your endgame goal. Unlike the traditional ASPD/Crit route that relies on high attack speed and Falcon triggers, the PEN/DEX build turns you into a pure skill-casting glass cannon.</p>
            <p>By stacking Physical Penetration (P.PEN) and raw DEX, your heavy-hitting skills will completely ignore monster physical defense, allowing you to melt MVPs and dominate in PvP. Here is the complete breakdown of how to build it.</p>
          </div>

          <div className="build-content vertical">
            <div className="build-step">
              <h5>1. Stat Allocation: The Pure DEX Route</h5>
              <p>Your stat points dictate your entire playstyle. For this build, your auto-attacks are secondary; your skills are your primary weapon.</p>
              <ul>
                <li><strong>Primary Stat (DEX):</strong> Put absolutely every single stat point into DEX. DEX is your main stat because it massively increases your Physical Attack, boosts your accuracy, and vitally reduces your skill cast time.</li>
                <li><strong>Secondary Stats (VIT or AGI):</strong> Once your DEX is completely maxed out, you have two options. Flex into VIT to gain HP percentage bonuses for survivability in KVM/GVG, or put points into AGI if you want to smooth out your skill animations and maintain decent auto-attack speed while your skills are on cooldown.</li>
              </ul>
            </div>

            <div className="build-step">
              <h5>2. The Core Skill Rotation</h5>
              <p>Because this build relies on skill-spamming, your action bar is going to look very different from an ASPD Hunter.</p>
              <ul>
                <li><strong>The Buffs:</strong> Always cast <HoverTooltip term="Wind Walk" /> and <HoverTooltip term="True Sight" /> before initiating combat. These are mandatory for scaling your base damage and mobility.</li>
                <li><strong>The Nukes:</strong> Stack your DPS cooldowns by combining <HoverTooltip term="Focused Shot" /> (a direct damage nuke perfect for single-target bosses) and <HoverTooltip term="Sharp Shooting" /> (your core burst skill that offers incredible PvP potential).</li>
                <li><strong>The Defense:</strong> Keep moving constantly, as your naturally low HP makes standing still fatal. Drop an <HoverTooltip term="Ankle Snare" /> trap defensively to lock down charging melee classes while you cast your nukes from a safe distance.</li>
              </ul>
            </div>

            <div className="build-step">
              <h5>3. Equipment & Accessories Strategy</h5>
              <p>Your gear needs to compensate for the fact that you are no longer relying on critical hits.</p>
              <ul>
                <li><strong>Weapons:</strong> Transition toward the <HoverTooltip term="Shortbow" /> for massive Haste/Skill spamming, or a <HoverTooltip term="Longbow" /> if you want higher base ATK for huge single-hit bursts.</li>
                <li><strong>Accessories:</strong> Ignore Crit gear completely. You must hunt for rings and talismans that provide P.PEN and Haste. Haste is critical because it reduces the cooldown timers on your Sniper skills (e.g., <HoverTooltip term="Autumn Talisman" /> or specific Haste rings).</li>
              </ul>
            </div>

            <div className="build-step">
              <h5>4. Enchantments: The Prontera Grind</h5>
              <p>Enchantments are where the PEN/DEX build truly comes online, allowing you to push your combat potential far beyond your base gear stats.</p>
              <ul>
                <li><strong>The Location:</strong> You must farm materials for Prontera and Morroc enchantments.</li>
                <li><strong>The Goal:</strong> Enchant your armor and accessories with <HoverTooltip term="Prontera DEX" />, aiming to push every single slot to at least level 5. Use <HoverTooltip term="Morroc" /> enchantments on your weapon for raw Physical Attack.</li>
                <li><strong>The Pro-Tip:</strong> Re-rolling enchantments gets incredibly expensive. Always use the "Lock" feature to preserve your best stat lines when trying to upgrade other slots, ensuring you never lose a perfect roll.</li>
              </ul>
            </div>

            <div className="build-step">
              <h5>5. Best Cards for PEN/DEX</h5>
              <p>Your card slots need to perfectly synergize with your burst-damage goals.</p>
              <ul>
                <li><strong>Weapon/Accessory Cards:</strong> You are looking for anything that grants flat Physical Attack, Physical Penetration, or damage modifiers. (e.g., the <HoverTooltip term="Andre Card" /> provides a great flat ATK boost, <HoverTooltip term="Marduk" /> for Final Damage).</li>
                <li><strong>Armor Cards:</strong> Because Snipers are extremely weak when caught off-guard or surrounded, slot your armor entirely with Max HP% cards (like <HoverTooltip term="Pupa" /> or <HoverTooltip term="Pecopeco" />) to prevent getting one-shot in MVP fights or PvP arenas.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
